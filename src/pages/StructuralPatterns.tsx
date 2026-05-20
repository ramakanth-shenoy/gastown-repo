import { Link } from 'react-router-dom'

const patterns = [
  {
    name: 'Adapter',
    path: 'adapter',
    description: 'Converts one interface to another that clients expect',
  },
  { name: 'Bridge', path: 'bridge', description: 'Separates abstraction from implementation' },
  { name: 'Composite', path: 'composite', description: 'Composes objects into tree structures' },
  {
    name: 'Decorator',
    path: 'decorator',
    description: 'Adds responsibilities to objects dynamically',
  },
  {
    name: 'Facade',
    path: 'facade',
    description: 'Provides a simplified interface to complex subsystems',
  },
  {
    name: 'Flyweight',
    path: 'flyweight',
    description: 'Shares fine-grained instances to support large numbers efficiently',
  },
  {
    name: 'Proxy',
    path: 'proxy',
    description: 'Provides a surrogate or placeholder for another object',
  },
]

export default function StructuralPatterns() {
  return (
    <section id="structural-patterns">
      <div className="hero">
        <h1>Structural Patterns</h1>
        <p className="intro">
          Structural patterns explain how to assemble objects and classes into larger structures,
          while keeping these structures flexible and easy to refactor.
        </p>
      </div>

      <div className="patterns-grid">
        {patterns.map((pattern) => (
          <Link key={pattern.path} to={`/structural/${pattern.path}`} className="pattern-card">
            <h3>{pattern.name}</h3>
            <p>{pattern.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
