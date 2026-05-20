import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'
import UmlDiagram from '../../components/UmlDiagram'

export default function DecoratorPattern() {
  return (
    <section id="pattern-page">
      <Link to="/structural" className="back-link">
        ← Back to Structural Patterns
      </Link>

      <h1>Decorator Pattern</h1>

      <div className="pattern-section">
        <h2>Problem</h2>
        <p>
          You're building a notification system that can send emails, SMS, and push notifications.
          Now you want to add optional features like encryption, compression, and filtering.
        </p>
        <p>
          Creating subclasses for every combination (EncryptedEmail, CompressedEmail,
          EncryptedAndCompressedEmail) leads to a combinatorial explosion. The Decorator pattern
          lets you wrap objects with additional responsibilities dynamically.
        </p>
      </div>

      <div className="pattern-section">
        <h2>UML Diagram</h2>
        <UmlDiagram>
          {`Component <|-- ConcreteComponent
Component <|-- Decorator
Decorator o--> Component

class Component {
  +operation(): void
}

class ConcreteComponent implements Component {
  +operation(): void
}

class Decorator implements Component {
  -component: Component
  +operation(): void
}

class ConcreteDecoratorA extends Decorator {
  +operation(): void
}

class ConcreteDecoratorB extends Decorator {
  +operation(): void
}`}
        </UmlDiagram>
      </div>

      <div className="pattern-section">
        <h2>Code Example</h2>

        <h3>Component Interface</h3>
        <CodeBlock language="typescript">
          {`interface Coffee {
  cost(): number
  description(): string
`}
        </CodeBlock>

        <h3>Concrete Component</h3>
        <CodeBlock language="typescript">
          {`class SimpleCoffee implements Coffee {
  cost(): number { return 2 }
  description(): string { return 'Simple coffee' }
}
`}
        </CodeBlock>

        <h3>Base Decorator</h3>
        <CodeBlock language="typescript">
          {`class CoffeeDecorator implements Coffee {
  protected coffee: Coffee

  constructor(coffee: Coffee) {
    this.coffee = coffee
  }

  cost(): number { return this.coffee.cost() }
  description(): string { return this.coffee.description() }
}
`}
        </CodeBlock>

        <h3>Concrete Decorators</h3>
        <CodeBlock language="typescript">
          {`class MilkDecorator extends CoffeeDecorator {
  cost(): number { return this.coffee.cost() + 0.5 }
  description(): string { return this.coffee.description() + ', milk' }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number { return this.coffee.cost() + 0.2 }
  description(): string { return this.coffee.description() + ', sugar' }
}

class WhipDecorator extends CoffeeDecorator {
  cost(): number { return this.coffee.cost() + 0.7 }
  description(): string { return this.coffee.description() + ', whip' }
}`}
        </CodeBlock>

        <h3>Usage</h3>
        <CodeBlock language="typescript">
          {`let coffee: Coffee = new SimpleCoffee()
coffee = new MilkDecorator(coffee)
coffee = new SugarDecorator(coffee)
coffee = new WhipDecorator(coffee)

console.log(coffee.description()) // Simple coffee, milk, sugar, whip
console.log(coffee.cost()) // 3.4`}
        </CodeBlock>
      </div>

      <div className="pattern-section">
        <h2>Real-World Use Cases</h2>
        <ul>
          <li>
            <strong>Streams:</strong> Node.js streams for file I/O with compression and encryption
          </li>
          <li>
            <strong>UI Components:</strong> Adding borders, scrollbars, or behaviors to components
          </li>
          <li>
            <strong>Middleware:</strong> Express.js middleware pipeline
          </li>
        </ul>
      </div>
    </section>
  )
}
