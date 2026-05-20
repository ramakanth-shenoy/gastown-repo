import PatternLayout from './PatternLayout'

const uml =
  '<svg width="520" height="280" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Factory Method UML">' +
  '<defs><style>.uml-text{font-family:Consolas,monospace;font-size:12px;fill:#08060d}.uml-heading{font-family:Consolas,monospace;font-size:11px;fill:#6b6375}.uml-line{stroke:#08060d;stroke-width:1.2}</style></defs>' +
  '<rect x="10" y="10" width="145" height="58" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="82" y="28" class="uml-heading" text-anchor="middle">«abstract»</text>' +
  '<text x="82" y="46" class="uml-text" text-anchor="middle">Creator</text>' +
  '<text x="82" y="62" class="uml-text" text-anchor="middle">+ factoryMethod(): Product</text>' +
  '<rect x="10" y="76" width="145" height="52" rx="6" fill="rgba(59,130,246,0.08)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="82" y="92" class="uml-text" text-anchor="middle">ConcreteCreatorA</text>' +
  '<text x="82" y="110" class="uml-text" text-anchor="middle">+ factoryMethod(): ProductA</text>' +
  '<line x1="82" y1="68" x2="82" y2="76" class="uml-line"/>' +
  '<rect x="10" y="136" width="145" height="52" rx="6" fill="rgba(59,130,246,0.08)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="82" y="152" class="uml-text" text-anchor="middle">ConcreteCreatorB</text>' +
  '<text x="82" y="170" class="uml-text" text-anchor="middle">+ factoryMethod(): ProductB</text>' +
  '<line x1="82" y1="128" x2="82" y2="136" class="uml-line"/>' +
  '<rect x="210" y="10" width="145" height="58" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="282" y="28" class="uml-heading" text-anchor="middle">«interface»</text>' +
  '<text x="282" y="46" class="uml-text" text-anchor="middle">Product</text>' +
  '<text x="282" y="62" class="uml-text" text-anchor="middle">+ use(): void</text>' +
  '<rect x="210" y="76" width="145" height="52" rx="6" fill="rgba(16,185,129,0.08)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="282" y="92" class="uml-text" text-anchor="middle">ConcreteProductA</text>' +
  '<text x="282" y="110" class="uml-text" text-anchor="middle">+ use(): void</text>' +
  '<line x1="282" y1="68" x2="282" y2="76" class="uml-line"/>' +
  '<rect x="210" y="136" width="145" height="52" rx="6" fill="rgba(16,185,129,0.08)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="282" y="152" class="uml-text" text-anchor="middle">ConcreteProductB</text>' +
  '<text x="282" y="170" class="uml-text" text-anchor="middle">+ use(): void</text>' +
  '<line x1="282" y1="128" x2="282" y2="136" class="uml-line"/>' +
  '<rect x="400" y="60" width="110" height="52" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="455" y="78" class="uml-heading" text-anchor="middle">Client</text>' +
  '<text x="455" y="96" class="uml-text" text-anchor="middle">c: Creator</text>' +
  '<text x="455" y="110" class="uml-text" text-anchor="middle">c.factoryMethod()</text>' +
  '<line x1="155" y1="39" x2="210" y2="39" class="uml-line" stroke-dasharray="4,3"/>' +
  '<text x="182" y="34" class="uml-heading" text-anchor="middle" style="font-size:9px">creates</text>' +
  '<line x1="155" y1="126" x2="210" y2="126" class="uml-line" stroke-dasharray="4,3"/>' +
  '<text x="178" y="134" class="uml-heading" text-anchor="middle" style="font-size:9px">creates</text>' +
  '<line x1="399" y1="86" x2="400" y2="86" class="uml-line"/>' +
  '</svg>'

const codeSnippet1 = `// Product interface
interface Transport {
  deliver(): string
}

class Truck implements Transport {
  deliver() { return "Delivering by road (truck)" }
}

class Ship implements Transport {
  deliver() { return "Delivering by sea (ship)" }
}

// Creator
abstract class Logistics {
  abstract createTransport(): Transport
  planDelivery() {
    const transport = this.createTransport()
    return transport.deliver()
  }
}

class RoadLogistics extends Logistics {
  createTransport() { return new Truck() }
}

class SeaLogistics extends Logistics {
  createTransport() { return new Ship() }
}`

const codeSnippet2 = `// Client code — decides which creator to instantiate
const orders: Logistics[] = [new RoadLogistics(), new SeaLogistics()]

for (const order of orders) {
  console.log(order.planDelivery())
  // "Delivering by road (truck)"
  // "Delivering by sea (ship)"
}`

export default function FactoryMethodPage() {
  return (
    <PatternLayout
      title="Factory Method"
      tagline="Define an interface for creating an object, but let subclasses decide which class to instantiate."
      problemTitle="The Problem"
      problem="When a class cannot anticipate the exact type of objects it needs to create at compile time, hard-coding individual constructors leads to brittle, tightly-coupled code. For example, a Logistics class that directly instantiates \u{1F69A} Truck or \u{1F6F2} Ship must be modified every time a new transport type is added. The Factory Method pattern solves this by moving the \u0060createTransport()\u0060 logic into subclasses, leaving the base class unaware of — and dependent on — any concrete product type."
      umlSvg={<div dangerouslySetInnerHTML={{ __html: uml }} />}
      code={[
        {
          label: 'factory-method.ts — TypeScript',
          source: codeSnippet1,
        },
        {
          label: 'Usage',
          source: codeSnippet2,
        },
      ]}
      useCases={[
        {
          title: 'Logistics & Shipping',
          description:
            'Encode different transport modes (truck, ship, plane) without changing logistics code.',
        },
        {
          title: 'UI Component Libraries',
          description:
            'Render the correct platform-specific dialog (Windows, macOS, web) from a unified factory, keeping rendering logic decoupled.',
        },
        {
          title: 'Document Processing',
          description:
            'A document editor uses the Factory Method to create the right importer (PDF, DOCX, ODT) based on file header or extension.',
        },
        {
          title: 'Payment Gateway Integration',
          description:
            'Encapsulate Stripe, PayPal, and Square behind a common PaymentProcessor interface, resolved via the Factory Method.',
        },
        {
          title: 'Test Doubles',
          description:
            'Swap real dependencies for mocks by providing a TestCreator subclass during test setup, keeping production and testing concerns cleanly separated.',
        },
      ]}
    />
  )
}
