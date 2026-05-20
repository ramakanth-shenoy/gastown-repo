import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'
import UmlDiagram from '../../components/UmlDiagram'

export default function CompositePattern() {
  return (
    <section id="pattern-page">
      <Link to="/structural" className="back-link">
        ← Back to Structural Patterns
      </Link>

      <h1>Composite Pattern</h1>

      <div className="pattern-section">
        <h2>Problem</h2>
        <p>
          You're building a graphics editor that works with images and groups of images. Sometimes
          you need to apply the same operations (resize, move, colorize) to both individual images
          and entire groups.
        </p>
        <p>
          The Composite pattern lets clients treat individual objects and compositions uniformly,
          creating tree structures and enabling recursive operations.
        </p>
      </div>

      <div className="pattern-section">
        <h2>UML Diagram</h2>
        <UmlDiagram>
          {`Component <|-- Leaf
Component <|-- Composite
Composite --> Component : children

class Component {
  +operation(): void
  +add(c: Component): void
  +remove(c: Component): void
  +getChild(i: int): Component
}

class Leaf extends Component {
  +operation(): void
}

class Composite extends Component {
  -children: List<Component>
  +operation(): void
  +add(c: Component): void
  +remove(c: Component): void
  +getChild(i: int): Component
}`}
        </UmlDiagram>
      </div>

      <div className="pattern-section">
        <h2>Code Example</h2>

        <h3>Component Interface</h3>
        <CodeBlock language="typescript">
          {`interface FileSystemItem {
  getSize(): number
  getName(): string
}
`}
        </CodeBlock>

        <h3>Leaf</h3>
        <CodeBlock language="typescript">
          {`class File implements FileSystemItem {
  constructor(private name: string, private size: number) {}

  getSize(): number { return this.size }
  getName(): string { return this.name }
}
`}
        </CodeBlock>

        <h3>Composite</h3>
        <CodeBlock language="typescript">
          {`class Directory implements FileSystemItem {
  private children: FileSystemItem[] = []

  constructor(private name: string) {}

  add(item: FileSystemItem): void {
    this.children.push(item)
  }

  remove(item: FileSystemItem): void {
    const index = this.children.indexOf(item)
    if (index > -1) this.children.splice(index, 1)
  }

  getSize(): number {
    return this.children.reduce((total, item) => total + item.getSize(), 0)
  }

  getName(): string { return this.name }
}
`}
        </CodeBlock>

        <h3>Usage</h3>
        <CodeBlock language="typescript">
          {`const root = new Directory('root')
const src = new Directory('src')
const file1 = new File('app.ts', 100)
const file2 = new File('utils.ts', 50)

src.add(file1)
src.add(file2)
root.add(src)

console.log(root.getSize()) // 150`}
        </CodeBlock>
      </div>

      <div className="pattern-section">
        <h2>Real-World Use Cases</h2>
        <ul>
          <li>
            <strong>File Systems:</strong> Files and directories with uniform operations
          </li>
          <li>
            <strong>Organization Charts:</strong> Employees and departments as tree structures
          </li>
          <li>
            <strong>UI Component Trees:</strong> React components and component trees
          </li>
        </ul>
      </div>
    </section>
  )
}
