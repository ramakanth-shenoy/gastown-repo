import PatternLayout from './PatternLayout'

const uml =
  '<svg width="520" height="330" viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Builder UML">' +
  '<defs><style>.uml-text{font-family:Consolas,monospace;font-size:12px;fill:#08060d}.uml-heading{font-family:Consolas,monospace;font-size:11px;fill:#6b6375}.uml-line{stroke:#08060d;stroke-width:1.2}.uml-fill-blue{fill:rgba(59,130,246,0.08)}.uml-fill-orange{fill:rgba(245,158,11,0.08)}</style></defs>' +
  '<!-- Director / Client -->' +
  '<rect x="10" y="10" width="140" height="50" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="80" y="28" class="uml-heading" text-anchor="middle">Client / Director</text>' +
  '<text x="80" y="44" class="uml-text" text-anchor="middle">construct(builder)</text>' +
  '<!-- Builder interface -->' +
  '<rect x="190" y="10" width="150" height="58" rx="6" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="265" y="28" class="uml-heading" text-anchor="middle">«interface»</text>' +
  '<text x="265" y="46" class="uml-text" text-anchor="middle">Builder</text>' +
  '<!-- Methods on Builder -->' +
  '<rect x="190" y="68" width="150" height="44" rx="0" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="265" y="84" class="uml-text" text-anchor="middle">setEngine()</text>' +
  '<text x="265" y="100" class="uml-text" text-anchor="middle">setSeats()</text>' +
  '<rect x="190" y="112" width="150" height="44" rx="0" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="265" y="128" class="uml-text" text-anchor="middle">setTransmission()</text>' +
  '<text x="265" y="144" class="uml-text" text-anchor="middle">setGPS()</text>' +
  '<rect x="190" y="156" width="150" height="44" rx="0" fill="none" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="265" y="172" class="uml-text" text-anchor="middle">getResult(): Car</text>' +
  '<!-- Concrete Builder 1 -->' +
  '<rect x="380" y="10" width="130" height="108" rx="6" fill="rgba(245,158,11,0.08)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="445" y="28" class="uml-heading" text-anchor="middle">concrete</text>' +
  '<text x="445" y="46" class="uml-text" text-anchor="middle">SportsCarBuilder</text>' +
  '<text x="445" y="64" class="uml-text" text-anchor="middle">+ setEngine()</text>' +
  '<text x="445" y="80" class="uml-text" text-anchor="middle">+ setSeats()</text>' +
  '<text x="445" y="96" class="uml-text" text-anchor="middle">+ getResult()</text>' +
  '<!-- Concrete Builder 2 -->' +
  '<rect x="380" y="138" width="130" height="108" rx="6" fill="rgba(245,158,11,0.08)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="445" y="156" class="uml-heading" text-anchor="middle">concrete</text>' +
  '<text x="445" y="174" class="uml-text" text-anchor="middle">SUVBuilder</text>' +
  '<text x="445" y="192" class="uml-text" text-anchor="middle">+ setEngine()</text>' +
  '<text x="445" y="208" class="uml-text" text-anchor="middle">+ setSeats()</text>' +
  '<text x="445" y="224" class="uml-text" text-anchor="middle">+ getResult()</text>' +
  '<!-- Product -->' +
  '<rect x="380" y="264" width="130" height="50" rx="6" fill="rgba(59,130,246,0.08)" stroke="var(--text,#08060d)" stroke-width="1.2"/>' +
  '<text x="445" y="282" class="uml-heading" text-anchor="middle">Product</text>' +
  '<text x="445" y="298" class="uml-text" text-anchor="middle">Car</text>' +
  '<!-- Connections -->' +
  '<line x1="80" y1="60" x2="190" y2="60" class="uml-line"/>' +
  '<text x="135" y="54" class="uml-heading" style="font-size:9px" text-anchor="middle">creates</text>' +
  '<line x1="340" y1="39" x2="380" y2="39" class="uml-line"/>' +
  '<line x1="340" y1="167" x2="380" y2="167" class="uml-line"/>' +
  '<path d="M445 118 C 445 180, 445 210, 445 264" fill="none" class="uml-line"/>' +
  '<text x="455" y="200" class="uml-heading" style="font-size:9px" text-anchor="middle">builds</text>' +
  '</svg>'

const codeSnippet1 = `// Product — the complex object being built
class Car {
  constructor(
    public engine: string = '',
    public seats: number = 0,
    public transmission: string = '',
    public gps: boolean = false,
  ) {}
}

// Builder interface
interface CarBuilder {
  setEngine(type: string): this
  setSeats(count: number): this
  setTransmission(type: string): this
  setGPS(enabled: boolean): this
  getResult(): Car
}

// Concrete Builder — produces a sports car
class SportsCarBuilder implements CarBuilder {
  private car = new Car()

  setEngine(type: string)  { this.car.engine = type; return this }
  setSeats(count: number)  { this.car.seats = count; return this }
  setTransmission(type: string) { this.car.transmission = type; return this }
  setGPS(enabled: boolean) { this.car.gps = enabled; return this }
  getResult() { return this.car }
}

// Concrete Builder — produces an SUV
class SUVBuilder implements CarBuilder {
  private car = new Car()

  setEngine(type: string)  { this.car.engine = type; return this }
  setSeats(count: number)  { this.car.seats = count; return this }
  setTransmission(type: string) { this.car.transmission = type; return this }
  setGPS(enabled: boolean) { this.car.gps = enabled; return this }
  getResult() { return this.car }
}

// Director — orchestrates the build steps
class CarDirector {
  constructSportsCar(builder: CarBuilder): Car {
    return builder.setEngine('V8').setSeats(2).setTransmission('manual').setGPS(false).getResult()
  }

  constructSUV(builder: CarBuilder): Car {
    return builder.setEngine('V6').setSeats(7).setTransmission('auto').setGPS(true).getResult()
  }
}`

const codeSnippet2 = `// Same building steps, different builders = different results
const director = new CarDirector()

const sportsCar = director.constructSportsCar(new SportsCarBuilder())
console.log(sportsCar)
// Car { engine: "V8", seats: 2, transmission: "manual", gps: false }

const suv = director.constructSUV(new SUVBuilder())
console.log(suv)
// Car { engine: "V6", seats: 7, transmission: "auto", gps: true }`

export default function BuilderPage() {
  return (
    <PatternLayout
      title="Builder"
      tagline="Separate the construction of a complex object from its representation so the same construction process can create different representations."
      problemTitle="The Problem"
      problem="Constructing a single \u0022Car\u0022 object requires setting multiple optional parameters: engine type, seat count, transmission, GPS, colour, towing package, etc. A naive constructor ends up with a long parameter list that is hard to read, easy to misuse, and almost impossible to extend without breaking existing callers. Overloaded constructors quickly become unmaintainably verbose. The Builder pattern solves this by replacing telescoping constructors with a fluent, step-by-step construction interface: each configuration call returns the builder itself so calls can be chained, and the final \u0060getResult()\u0060 call returns the fully-formed product."
      umlSvg={<div dangerouslySetInnerHTML={{ __html: uml }} />}
      code={[
        {
          label: 'builder.ts — TypeScript',
          source: codeSnippet1,
        },
        {
          label: 'Usage',
          source: codeSnippet2,
        },
      ]}
      useCases={[
        {
          title: 'Query Builders / ORMs',
          description:
            'Fluent APIs like Knex.js and TypeORM let callers compose SQL queries step-by-step without string concatenation.',
        },
        {
          title: 'HTTP Request Construction',
          description:
            'Axios and Similar use the Builder pattern so callers can chain method, URL, headers, and body config calls.',
        },
        {
          title: 'React Component Configuration',
          description:
            'Multi-step form wizards and configuration dialogs use Builder-like state accumulation rather than one massive configuration object.',
        },
        {
          title: 'Email Message Composition',
          description:
            'Sets of to/cc/bcc/attachments/alternative body parts are assembled incrementally with fluent setters before send.',
        },
        {
          title: 'Test Data Factories',
          description:
            'Test builders construct focused test fixtures without repeating hundreds of optional field defaults in every spec.',
        },
      ]}
    />
  )
}
