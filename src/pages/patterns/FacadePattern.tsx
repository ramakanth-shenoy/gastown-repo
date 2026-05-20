import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'
import UmlDiagram from '../../components/UmlDiagram'

export default function FacadePattern() {
  return (
    <section id="pattern-page">
      <Link to="/structural" className="back-link">
        ← Back to Structural Patterns
      </Link>

      <h1>Facade Pattern</h1>

      <div className="pattern-section">
        <h2>Problem</h2>
        <p>
          You're creating a home theater system. To watch a movie, you need to: turn on the
          amplifier, set the volume, turn on the DVD player, start playing, lower the screen, and
          turn on the projector.
        </p>
        <p>
          The Facade pattern provides a simplified interface to a complex subsystem, reducing
          coupling and making the subsystem easier to use.
        </p>
      </div>

      <div className="pattern-section">
        <h2>UML Diagram</h2>
        <UmlDiagram>
          {`Facade --> SubsystemClass1
Facade --> SubsystemClass2
SubsystemClass1 --> SubsystemClass2

class Facade {
  -subsystem1: SubsystemClass1
  -subsystem2: SubsystemClass2
  +operation(): void
}

class SubsystemClass1 {
  +operation1(): void
}

class SubsystemClass2 {
  +operation2(): void
}

class Client {
  +main(): void
}`}
        </UmlDiagram>
      </div>

      <div className="pattern-section">
        <h2>Code Example</h2>

        <h3>Complex Subsystems</h3>
        <CodeBlock language="typescript">
          {`class Amplifier {
  turnOn() { console.log('Amplifier on') }
  setVolume(level: number) { console.log(\`Volume: \${level}\`) }
}

class DvdPlayer {
  turnOn() { console.log('DVD player on') }
  play(movie: string) { console.log(\`Playing: \${movie}\`) }
}

class Projector {
  turnOn() { console.log('Projector on') }
  setMode(wide: boolean) { console.log(\`Mode: \${wide ? 'wide' : 'normal'}\`) }
}

class Screen {
  down() { console.log('Screen down') }
}
`}
        </CodeBlock>

        <h3>Facade</h3>
        <CodeBlock language="typescript">
          {`class HomeTheaterFacade {
  constructor(
    private amp: Amplifier,
    private dvd: DvdPlayer,
    private projector: Projector,
    private screen: Screen
  ) {}

  watchMovie(movie: string) {
    console.log('Get ready to watch a movie...')
    this.screen.down()
    this.projector.turnOn()
    this.projector.setMode(true)
    this.amp.turnOn()
    this.amp.setVolume(5)
    this.dvd.turnOn()
    this.dvd.play(movie)
  }

  endMovie() {
    console.log('Shutting down...')
    this.amp.setVolume(0)
    this.dvd.turnOn()
    this.projector.turnOn()
    this.screen.down()
  }
}`}
        </CodeBlock>

        <h3>Usage</h3>
        <CodeBlock language="typescript">
          {`const theater = new HomeTheaterFacade(
  new Amplifier(),
  new DvdPlayer(),
  new Projector(),
  new Screen()
)

theater.watchMovie('The Matrix')
// Client code is shielded from complex subsystem interactions`}
        </CodeBlock>
      </div>

      <div className="pattern-section">
        <h2>Real-World Use Cases</h2>
        <ul>
          <li>
            <strong>Libraries:</strong> Simplified APIs over complex libraries (jQuery over DOM
            APIs)
          </li>
          <li>
            <strong>Database Connections:</strong> Connection pooling abstractions
          </li>
          <li>
            <strong>Payment Processing:</strong> Unified interfaces over payment gateway APIs
          </li>
        </ul>
      </div>
    </section>
  )
}
