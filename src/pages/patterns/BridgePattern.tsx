import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'
import UmlDiagram from '../../components/UmlDiagram'

export default function BridgePattern() {
  return (
    <section id="pattern-page">
      <Link to="/structural" className="back-link">
        ← Back to Structural Patterns
      </Link>

      <h1>Bridge Pattern</h1>

      <div className="pattern-section">
        <h2>Problem</h2>
        <p>
          You have a geometric shape class hierarchy with circles and squares. But now you need to
          extend it to support different colors (red, blue, green). A naive approach would create
          subclasses like RedCircle, BlueCircle, RedSquare, BlueSquare, etc.
        </p>
        <p>
          The number of classes explodes combinatorially. The Bridge pattern decouples the
          abstraction (shape) from its implementation (color), allowing them to vary independently.
        </p>
      </div>

      <div className="pattern-section">
        <h2>UML Diagram</h2>
        <UmlDiagram>
          {`Abstraction <|-- RefinedAbstraction
Abstraction o--> Implementor
Implementor <|-- ConcreteImplementorA
Implementor <|-- ConcreteImplementorB

class Abstraction {
  -implementor: Implementor
  +operation(): void
}

interface Implementor {
  +doSomething(): void
}

class ConcreteImplementorA implements Implementor {
  +doSomething(): void
}

class ConcreteImplementorB implements Implementor {
  +doSomething(): void
}`}
        </UmlDiagram>
      </div>

      <div className="pattern-section">
        <h2>Code Example</h2>

        <h3>Implementor Interface</h3>
        <CodeBlock language="typescript">
          {`interface Color {
  fill(): string
`}
        </CodeBlock>

        <h3>Concrete Implementations</h3>
        <CodeBlock language="typescript">
          {`class Red implements Color {
  fill(): string { return 'Applying red color' }
}

class Blue implements Color {
  fill(): string { return 'Applying blue color' }
}`}
        </CodeBlock>

        <h3>Abstraction</h3>
        <CodeBlock language="typescript">
          {`abstract class Shape {
  protected color: Color

  constructor(color: Color) {
    this.color = color
  }

  abstract draw(): string
}

class Circle extends Shape {
  draw(): string {
    return \`Drawing a circle - \${this.color.fill()}\`
  }
}

class Square extends Shape {
  draw(): string {
    return \`Drawing a square - \${this.color.fill()}\`
  }
}
`}
        </CodeBlock>

        <h3>Usage</h3>
        <CodeBlock language="typescript">
          {`const redCircle = new Circle(new Red())
console.log(redCircle.draw()) // Drawing a circle - Applying red color

const blueSquare = new Square(new Blue())
console.log(blueSquare.draw()) // Drawing a square - Applying blue color`}
        </CodeBlock>
      </div>

      <div className="pattern-section">
        <h2>Real-World Use Cases</h2>
        <ul>
          <li>
            <strong>GUI Frameworks:</strong> Separating window abstractions from platform-specific
            implementations
          </li>
          <li>
            <strong>Database Drivers:</strong> Bridge between database API and different database
            engines
          </li>
          <li>
            <strong>Device Drivers:</strong> Operating system abstractions and hardware
            implementations
          </li>
        </ul>
      </div>
    </section>
  )
}
