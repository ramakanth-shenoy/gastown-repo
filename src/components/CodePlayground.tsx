import { useState, useCallback, useRef } from 'react'
import Editor, { type OnMount } from '@monaco-editor/react'
import type { editor } from 'monaco-editor'
import '../styles/CodePlayground.css'

interface CodePlaygroundProps {
  label: string
  initialCode: string
  language?: string
}

type OutputEntry =
  | { type: 'log'; args: string[] }
  | { type: 'error'; message: string }
  | { type: 'result'; message: string }

function formatArg(arg: unknown): string {
  if (arg === undefined) return 'undefined'
  if (arg === null) return 'null'
  if (typeof arg === 'object') {
    try {
      return JSON.stringify(arg, null, 2)
    } catch {
      return String(arg)
    }
  }
  return String(arg)
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export default function CodePlayground({
  label,
  initialCode,
  language = 'typescript',
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState<OutputEntry[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)

  const handleEditorMount: OnMount = useCallback((editor) => {
    editorRef.current = editor
    editor.focus()
  }, [])

  const resetCode = useCallback(() => {
    setCode(initialCode)
    setOutput([])
    editorRef.current?.focus()
  }, [initialCode])

  // Strip TypeScript types using babel-standalone
  const stripTypes = useCallback((tsCode: string): string => {
    try {
      // @ts-expect-error babel transform available in runtime
      const result = Babel.transform(tsCode, {
        presets: ['typescript'],
        filename: 'playground.ts',
      })
      return result.code ?? tsCode
    } catch {
      return tsCode
    }
  }, [])

  const runCode = useCallback(() => {
    setIsRunning(true)
    setOutput([])

    const timeoutId = setTimeout(() => {
      setOutput((prev) => [
        ...prev,
        { type: 'error', message: 'Execution timed out (infinite loop protection)' },
      ])
      setIsRunning(false)
    }, 5000)

    try {
      const jsCode = stripTypes(code)

      const lines: string[] = []
      const customConsole = {
        log: (...args: unknown[]) => lines.push(args.map(formatArg).join(' ')),
        warn: (...args: unknown[]) => lines.push('[warn] ' + args.map(formatArg).join(' ')),
        error: (...args: unknown[]) => lines.push('[error] ' + args.map(formatArg).join(' ')),
        info: (...args: unknown[]) => lines.push('[info] ' + args.map(formatArg).join(' ')),
      }

      const sandbox: Record<string, unknown> = { console: customConsole }

      const fnBody = jsCode
      const execute = new Function('sandbox', `with (sandbox) { ${fnBody} }`)

      execute(sandbox)

      clearTimeout(timeoutId)

      if (lines.length > 0) {
        setOutput(lines.map((line) => ({ type: 'log' as const, args: [line] })))
      }
    } catch (err) {
      clearTimeout(timeoutId)
      setOutput([{ type: 'error', message: err instanceof Error ? err.message : String(err) }])
    } finally {
      clearTimeout(timeoutId)
      setIsRunning(false)
    }
  }, [code, stripTypes])

  return (
    <figure className="code-figure playground-figure">
      <figcaption className="code-label code-label-row">
        <span className="code-label">{label}</span>
        <div className="code-buttons">
          <button type="button" className="run-button" onClick={runCode} disabled={isRunning}>
            {isRunning ? (
              <>
                <span className="spinner" />
                Running…
              </>
            ) : (
              <>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <polygon points="2,1 11,6.5 2,12" fill="currentColor" />
                </svg>
                Run
              </>
            )}
          </button>
          <button
            type="button"
            className="reset-button"
            onClick={resetCode}
            disabled={code === initialCode || isRunning}
          >
            Reset
          </button>
        </div>
      </figcaption>

      <div className="playground-editor-wrapper">
        <Editor
          height="260px"
          language={language}
          value={code}
          onChange={(value) => setCode(value ?? '')}
          onMount={handleEditorMount}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: 'var(--mono)',
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            tabSize: 2,
            automaticLayout: true,
            padding: { top: 12, bottom: 12 },
            renderWhitespace: 'selection',
          }}
        />
      </div>

      {output.length > 0 && (
        <div className="playground-output" role="region" aria-label="Output">
          <div className="output-header">
            <span className="output-label">Output</span>
            <button type="button" className="output-clear" onClick={() => setOutput([])}>
              Clear
            </button>
          </div>
          <div className="output-body">
            {output.map((entry, i) => {
              if (entry.type === 'error') {
                return (
                  <div key={i} className="output-line error">
                    {escapeHtml(entry.message)}
                  </div>
                )
              }
              if (entry.type === 'log') {
                return (
                  <div
                    key={i}
                    className="output-line"
                    dangerouslySetInnerHTML={{
                      __html: escapeHtml(entry.args.join(' ')),
                    }}
                  />
                )
              }
              return null
            })}
          </div>
        </div>
      )}
    </figure>
  )
}
