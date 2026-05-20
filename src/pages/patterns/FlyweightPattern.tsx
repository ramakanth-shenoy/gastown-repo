import { Link } from 'react-router-dom'
import CodePlayground from '../../components/CodePlayground'
import UmlDiagram from '../../components/UmlDiagram'

export default function FlyweightPattern() {
  return (
    <section id="pattern-page">
      <Link to="/structural" className="back-link">
        ← Back to Structural Patterns
      </Link>

      <h1>Flyweight Pattern</h1>

      <div className="pattern-section">
        <h2>Problem</h2>
        <p>
          You're building a text editor that needs to display thousands of characters. Each
          character object stores font, size, color, and other display properties, consuming
          excessive memory.
        </p>
        <p>
          The Flyweight pattern shares common state among many fine-grained objects, reducing memory
          usage by separating intrinsic (shared) state from extrinsic state.
        </p>
      </div>

      <div className="pattern-section">
        <h2>UML Diagram</h2>
        <UmlDiagram>
          {`FlyweightFactory --> Flyweight : creates
Flyweight <|-- ConcreteFlyweight
Flyweight --> UnsharedConcreteFlyweight : uses

class Flyweight {
  +operation(extrinsicState): void
}

class ConcreteFlyweight implements Flyweight {
  -intrinsicState: Object
  +operation(extrinsicState): void
}

class FlyweightFactory {
  -flyweights: Map<Object, Flyweight>
  +getFlyweight(key): Flyweight
}

class UnsharedConcreteFlyweight implements Flyweight {
  +operation(extrinsicState): void
}

class Client {
  -flyweight: Flyweight
  -extrinsicState: Object
  +operation(): void
}`}
        </UmlDiagram>
      </div>

      <div className="pattern-section">
        <h2>Code Example</h2>

        <h3>Flyweight Interface</h3>
        <CodePlayground
          label="Flyweight Interface"
          initialCode={`interface TextStyle {
  render(char: string, position: { x: number, y: number }): string
}`}
          language="typescript"
        />

        <h3>Concrete Flyweight</h3>
        <CodePlayground
          label="Concrete Flyweight"
          initialCode={`class CharacterStyle implements TextStyle {
  private static instances: Map<string, CharacterStyle> = new Map()

  private constructor(private font: string, private size: number) {}

  static getInstance(font: string, size: number): CharacterStyle {
    const key = \`\${font}-\${size}\`
    if (!CharacterStyle.instances.has(key)) {
      CharacterStyle.instances.set(key, new CharacterStyle(font, size))
    }
    return CharacterStyle.instances.get(key)!
  }

  render(char: string, position: { x: number, y: number }): string {
    return \`Rendering '\${char}' at (\${position.x}, \${position.y}) with \${this.font} \${this.size}px\`
  }
}`}
          language="typescript"
        />

        <h3>Flyweight Factory</h3>
        <CodePlayground
          label="Flyweight Factory"
          initialCode={`class TextStyleFactory {
  private styles: Map<string, CharacterStyle> = new Map()

  getStyle(font: string, size: number): CharacterStyle {
    const key = \`\${font}-\${size}\`
    if (!this.styles.has(key)) {
      this.styles.set(key, CharacterStyle.getInstance(font, size))
    }
    return this.styles.get(key)!
  }
}`}
          language="typescript"
        />

        <h3>Usage</h3>
        <CodePlayground
          label="Usage"
          initialCode={`const factory = new TextStyleFactory()

// Many characters can share the same style object
const boldStyle = factory.getStyle('Arial', 12)
const results = 'HELLO'.split('').map((char, i) =>
  boldStyle.render(char, { x: i * 10, y: 0 })
)

console.log(results) // All use the same boldStyle instance`}
          language="typescript"
        />
      </div>

      <div className="pattern-section">
        <h2>Real-World Use Cases</h2>
        <ul>
          <li>
            <strong>Text Editors:</strong> Sharing character formatting objects
          </li>
          <li>
            <strong>Game Development:</strong> Reusing tree and particle objects
          </li>
          <li>
            <strong>Web Browsers:</strong> CSS style objects shared across elements
          </li>
        </ul>
      </div>
    </section>
  )
}
