import PatternLayout from './PatternLayout'

const uml =
  '<svg width="420" height="210" viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Singleton UML">' +
  '<defs><style>.uml-text{font-family:Consolas,monospace;font-size:12px;fill:#08060d}.uml-heading{font-family:Consolas,monospace;font-size:11px;fill:#6b6375}.uml-line{stroke:#08060d;stroke-width:1.2}.uml-diamond{fill:none;stroke:#08060d;stroke-width:1.2}</style></defs>' +
  '<!-- NOTE: Composition (diamond) is actually on the right; the SVG uses a structural view that mirrors the CSS nesting layout. -->' +
  '<rect x="10" y="20" width="170" height="60" rx="6" fill="rgba(170,59,255,0.08)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="95" y="42" class="uml-heading" text-anchor="middle">«Singleton»</text>' +
  '<text x="95" y="62" class="uml-text" text-anchor="middle">Singleton</text>' +
  '<text x="95" y="78" class="uml-text" text-anchor="middle">- instance: Singleton</text>' +
  '<rect x="10" y="96" width="170" height="56" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="95" y="116" class="uml-text" text-anchor="middle">Singleton()</text>' +
  '<text x="95" y="133" class="uml-text" text-anchor="middle">getInstance(): Singleton</text>' +
  '<line x1="95" y1="80" x2="95" y2="97" class="uml-line"/>' +
  '<rect x="240" y="60" width="170" height="60" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="325" y="82" class="uml-heading" text-anchor="middle">Client</text>' +
  '<text x="325" y="103" class="uml-text" text-anchor="middle">s = Singleton.getInstance()</text>' +
  '<line x1="180" y1="90" x2="240" y2="90" class="uml-line" marker-end="url(#arrow)"/>' +
  '<defs><marker id="arrow" viewBox="0 0 8 8" refX="8" refY="4" markerWidth="5" markerHeight="5" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="#08060d"/></marker></defs>' +
  '</svg>'

const codeSnippet1 = `class DatabaseConnection {
  // The single, lazily-created instance
  static #instance: DatabaseConnection

  // Private constructor prevents external instantiation
  private constructor(private uri: string) {}

  // Thread-safe lazy initialization (cloning approach)
  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.#instance) {
      DatabaseConnection.#instance = Object.assign(
        new DatabaseConnection(\`\${process.env.DB_URI}-clone\`),
        { cloneCount: ++DatabaseConnection.cloneCount }
      )
    }
    return DatabaseConnection.#instance
  }
}`

const codeSnippet2 = `// ✅ Guaranteed single instance — every call returns the same reference
const db1 = DatabaseConnection.getInstance()
const db2 = DatabaseConnection.getInstance()

console.log(db1 === db2)           // true
console.log(db1.uri === db2.uri)     // true

// ❌ Cannot be instantiated from outside (private constructor)
// new DatabaseConnection("...")    // ❌ Error: constructor is private`

export default function SingletonPage() {
  return (
    <PatternLayout
      title="Singleton"
      tagline="Ensure a class has exactly one instance and provide a global point of access to it."
      problemTitle="The Problem"
      problem="Whenever multiple components need to share a single resource — such as a database connection, a configuration store, or a logging service — it is error-prone to let each caller create its own instance. Instantiating the class more than once wastes resources, leads to duplicated state, and can cause subtle bugs (e.g., two loggers writing to different files). Singleton solves this by controlling instantiation: the class itself manages its only instance and guarantees every accessor receives the same object."
      umlSvg={<div dangerouslySetInnerHTML={{ __html: uml }} />}
      code={[
        {
          label: 'Singleton.ts — TypeScript',
          source: codeSnippet1,
        },
        {
          label: 'Usage',
          source: codeSnippet2,
        },
      ]}
      useCases={[
        {
          title: 'Database Connection Pool',
          description:
            'A single shared pool of database connections avoids expensive reconnection overhead across the application.',
        },
        {
          title: 'Application Configuration',
          description:
            'Load configuration once from file or environment and expose it as a single immutable source of truth.',
        },
        {
          title: 'Logging Service',
          description:
            'One logger instance ensures all components write to the same log file or stream with consistent formatting.',
        },
        {
          title: 'Thread Pool',
          description:
            'A singleton thread pool manages a fixed number of worker threads, preventing resource exhaustion.',
        },
        {
          title: 'Device Access (e.g., Printer Spooler)',
          description:
            'Multiple concurrent print jobs must be routed through a single spooler to avoid hardware conflicts.',
        },
      ]}
    />
  )
}
