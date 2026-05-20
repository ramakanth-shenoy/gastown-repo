import { Link } from 'react-router-dom'
import './CreationalIndex.css'

const patterns = [
  {
    slug: 'singleton' as const,
    title: 'Singleton',
    tagline: 'Ensure a class has only one instance and provide a global point of access to it.',
    short: 'Controls instantiation so only one instance exists at a time.',
    color: '#aa3bff',
  },
  {
    slug: 'factory-method' as const,
    title: 'Factory Method',
    tagline:
      'Define an interface for creating an object, but let subclasses decide which class to instantiate.',
    short: 'Delegates object creation to subclasses via a factory method.',
    color: '#3b82f6',
  },
  {
    slug: 'abstract-factory' as const,
    title: 'Abstract Factory',
    tagline:
      'Provide an interface for creating families of related or dependent objects without specifying their concrete classes.',
    short: 'Produces families of related objects matched by product family.',
    color: '#10b981',
  },
  {
    slug: 'builder' as const,
    title: 'Builder',
    tagline:
      'Separate the construction of a complex object from its representation so the same construction process can create different representations.',
    short: 'Steps through assembling a complex object piece by piece.',
    color: '#f59e0b',
  },
  {
    slug: 'prototype' as const,
    title: 'Prototype',
    tagline:
      'Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.',
    short: 'Clones existing objects rather than building from scratch.',
    color: '#ef4444',
  },
]

export default function CreationalIndex() {
  return (
    <div className="creational-index">
      <header className="index-header">
        <h1 className="index-title">Creational Design Patterns</h1>
        <p className="index-subtitle">
          Creational patterns abstract the instantiation process. They help make a system
          independent of how its objects are created, composed, and represented.
        </p>
      </header>

      <div className="category-label">Patterns</div>
      <ul className="pattern-grid">
        {patterns.map(({ slug, title, tagline, short, color }) => (
          <li key={slug}>
            <Link to={`/creational/${slug}`} className="pattern-card">
              <span className="card-accent" style={{ background: color }} />
              <h2 className="card-title">{title}</h2>
              <p className="card-tagline">{tagline}</p>
              <span className="card-short">{short}</span>
            </Link>
          </li>
        ))}
      </ul>

      <section className="overview" aria-labelledby="overview-heading">
        <h2 className="overview-heading" id="overview-heading">
          Why Creational Patterns?
        </h2>
        <p>
          Object creation is a fundamental activity in any object-oriented system. How objects are
          created can significantly impact a program&apos;s flexibility, maintainability, and
          testability.
        </p>
        <p>
          Creational design patterns offer various ways to instantiate objects that best fit the
          situation. They hide the complexity of object creation from the calling code, making the
          system more modular and easier to extend.
        </p>
      </section>
    </div>
  )
}
