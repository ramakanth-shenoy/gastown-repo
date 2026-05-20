interface CodeBlockProps {
  language?: string
  children: string
}

export default function CodeBlock({ language = 'typescript', children }: CodeBlockProps) {
  return (
    <pre className={`code-block language-${language}`}>
      <code>{children.trim()}</code>
    </pre>
  )
}
