import { Link } from 'react-router-dom'
import CodePlayground from '../../components/CodePlayground'
import UmlDiagram from '../../components/UmlDiagram'

export default function AdapterPattern() {
  return (
    <section id="pattern-page">
      <Link to="/structural" className="back-link">
        ← Back to Structural Patterns
      </Link>

      <h1>Adapter Pattern</h1>

      <div className="pattern-section">
        <h2>Problem</h2>
        <p>
          Imagine you're developing a stock trading app. You have a neat analytics library that
          calculates average prices from European stock data. But the data from the American stocks
          comes in a format incompatible with your analytics library.
        </p>
        <p>
          The Adapter pattern lets you create an adapter that translates the interface of one class
          into an interface clients expect. It acts as a bridge between two incompatible interfaces.
        </p>
      </div>

      <div className="pattern-section">
        <h2>UML Diagram</h2>
        <UmlDiagram>
          {`Target <|-- Adapter
Adaptee <.. Adapter : uses
Adapter --> Adaptee : adaptee

class Target {
  +request(): string
}

class Adaptee {
  +specificRequest(): string
}

class Adapter {
  -adaptee: Adaptee
  +request(): string
}`}
        </UmlDiagram>
      </div>

      <div className="pattern-section">
        <h2>Code Example</h2>

        <h3>Target Interface</h3>
        <CodePlayground
          label="Target Interface"
          initialCode={`interface PaymentProcessor {
  process(amount: number): string
}`}
          language="typescript"
        />

        <h3>Adaptee (Incompatible Interface)</h3>
        <CodePlayground
          label="Adaptee (Incompatible Interface)"
          initialCode={`class StripePayment {
  makePayment(cents: number): string {
    return \`Processed \${cents} cents via Stripe\`
  }
}`}
          language="typescript"
        />

        <h3>Adapter</h3>
        <CodePlayground
          label="Adapter"
          initialCode={`class StripeAdapter implements PaymentProcessor {
  private stripe: StripePayment

  constructor() {
    this.stripe = new StripePayment()
  }

  process(amount: number): string {
    const cents = Math.round(amount * 100)
    return this.stripe.makePayment(cents)
  }
}`}
          language="typescript"
        />

        <h3>Usage</h3>
        <CodePlayground
          label="Usage"
          initialCode={`const processor: PaymentProcessor = new StripeAdapter()
console.log(processor.process(99.99)) // Processed 9999 cents via Stripe`}
          language="typescript"
        />
      </div>

      <div className="pattern-section">
        <h2>Real-World Use Cases</h2>
        <ul>
          <li>
            <strong>API Integration:</strong> Connecting legacy systems to modern APIs
          </li>
          <li>
            <strong>Payment Gateways:</strong> Unifying different payment provider interfaces
          </li>
          <li>
            <strong>Database Libraries:</strong> Creating consistent interfaces across different
            database drivers
          </li>
        </ul>
      </div>
    </section>
  )
}
