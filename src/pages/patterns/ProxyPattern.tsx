import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'
import UmlDiagram from '../../components/UmlDiagram'

export default function ProxyPattern() {
  return (
    <section id="pattern-page">
      <Link to="/structural" className="back-link">
        ← Back to Structural Patterns
      </Link>

      <h1>Proxy Pattern</h1>

      <div className="pattern-section">
        <h2>Problem</h2>
        <p>
          You need to control access to a database connection that's expensive to create. You want
          to add authentication, lazy initialization, and logging without modifying the actual
          database connection code.
        </p>
        <p>
          The Proxy pattern provides a surrogate or placeholder for another object to control access
          to it, adding functionality without changing the original object.
        </p>
      </div>

      <div className="pattern-section">
        <h2>UML Diagram</h2>
        <UmlDiagram>
          {`Subject <|-- RealSubject
Subject <|-- Proxy
Proxy --> RealSubject

interface Subject {
  +request(): void
}

class RealSubject implements Subject {
  +request(): void
}

class Proxy implements Subject {
  -realSubject: RealSubject
  +request(): void
}

class Client {
  +main(): void
}`}
        </UmlDiagram>
      </div>

      <div className="pattern-section">
        <h2>Code Example</h2>

        <h3>Subject Interface</h3>
        <CodeBlock language="typescript">
          {`interface Database {
  query(sql: string): Promise<string[]>
}`}
        </CodeBlock>

        <h3>Real Subject</h3>
        <CodeBlock language="typescript">
          {`class RealDatabase implements Database {
  async query(sql: string): Promise<string[]> {
    console.log(\`Executing query: \${sql}\`)
    return ['result1', 'result2']
  }
}`}
        </CodeBlock>

        <h3>Proxy</h3>
        <CodeBlock language="typescript">
          {`class DatabaseProxy implements Database {
  private realDatabase: RealDatabase | null = null
  private isAuthenticated: boolean = false

  constructor(private username: string, private password: string) {}

  private authenticate(): boolean {
    console.log('Authenticating...')
    return this.username === 'admin' && this.password === 'secret'
  }

  async query(sql: string): Promise<string[]> {
    if (!this.isAuthenticated) {
      this.isAuthenticated = this.authenticate()
    }

    if (!this.isAuthenticated) {
      throw new Error('Access denied')
    }

    if (!this.realDatabase) {
      console.log('Creating database connection...')
      this.realDatabase = new RealDatabase()
    }

    console.log('Proxy: Logging query execution')
    return this.realDatabase.query(sql)
  }
}`}
        </CodeBlock>

        <h3>Usage</h3>
        <CodeBlock language="typescript">
          {`async function main() {
  const db = new DatabaseProxy('admin', 'secret')
  const results = await db.query('SELECT * FROM users')
  console.log(results) // ['result1', 'result2']
}

main() // Lazy initialization and access control handled by proxy`}
        </CodeBlock>
      </div>

      <div className="pattern-section">
        <h2>Real-World Use Cases</h2>
        <ul>
          <li>
            <strong>Virtual Proxies:</strong> Lazy loading of large objects
          </li>
          <li>
            <strong>Protection Proxies:</strong> Access control and authentication
          </li>
          <li>
            <strong>Remote Proxies:</strong> Network communication stubs
          </li>
        </ul>
      </div>
    </section>
  )
}
