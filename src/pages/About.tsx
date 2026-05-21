import { Link } from 'react-router-dom'
import './About.css'

export default function AboutPage() {
  return (
    <div className="page-container">
      <Link to="/" className="back-link">
        ← Home
      </Link>

      <article className="about-page">
        <header className="page-header">
          <h1 className="page-title">About This App</h1>
          <p className="page-tagline">
            A modern guide to understanding and applying design patterns in software development
          </p>
        </header>

        <section className="section" aria-labelledby="purpose-heading">
          <h2 className="section-heading" id="purpose-heading">
            Purpose
          </h2>
          <div className="section-body">
            <p>
              This application is designed to help developers learn, understand, and apply the
              classic Gang of Four (GoF) design patterns. Whether you are new to design patterns or
              looking to refresh your knowledge, this interactive guide provides clear explanations,
              visual diagrams, and practical code examples.
            </p>
            <p>
              The patterns are organized into two main categories: <strong>Creational</strong>{' '}
              patterns that deal with object creation mechanisms, and <strong>Structural</strong>{' '}
              patterns that explain how to assemble objects and classes into larger structures.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="using-heading">
          <h2 className="section-heading" id="using-heading">
            How to Use This App Effectively
          </h2>
          <div className="section-body">
            <h3 className="subsection-heading">Start with the Basics</h3>
            <p>
              If you are new to design patterns, begin with the Creational patterns. These patterns
              solve fundamental object creation problems and establish the mental model you will
              need for more complex patterns.
            </p>

            <h3 className="subsection-heading">Read the Problem Statement</h3>
            <p>
              Each pattern page starts with a clear problem description. Understanding the problem
              deeply will help you recognize when to apply the pattern in real-world scenarios.
            </p>

            <h3 className="subsection-heading">Study the UML Diagram</h3>
            <p>
              The UML diagram provides a visual representation of the pattern structure. Study the
              relationships between classes and interfaces to understand how the pattern achieves
              its goals.
            </p>

            <h3 className="subsection-heading">Examine the Code Examples</h3>
            <p>
              Code examples are provided in TypeScript and demonstrate practical implementations.
              Experiment with modifying the code to see how changes affect behavior.
            </p>

            <h3 className="subsection-heading">Review Use Cases</h3>
            <p>
              Each pattern includes real-world use cases that show how the pattern is applied in
              practice. These examples help bridge the gap between theory and application.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="credits-heading">
          <h2 className="section-heading" id="credits-heading">
            Credits & Resources
          </h2>
          <div className="section-body">
            <h3 className="subsection-heading">Foundational Work</h3>
            <p>
              This application is inspired by the seminal work "Design Patterns: Elements of
              Reusable Object-Oriented Software" by Erich Gamma, Richard Helm, Ralph Johnson, and
              John Vlissides (the Gang of Four).
            </p>

            <h3 className="subsection-heading">Additional Resources</h3>
            <ul className="resource-list">
              <li>
                <a
                  href="https://refactoring.guru/design-patterns"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Refactoring Guru
                </a>
                {' — '}Comprehensive design patterns reference with visual examples
              </li>
              <li>
                <a href="https://www.oodesign.com" target="_blank" rel="noopener noreferrer">
                  oodesign.com
                </a>
                {' — '}Detailed pattern descriptions and comparisons
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Software_design_pattern"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia: Software Design Patterns
                </a>
                {' — '}General overview and pattern classifications
              </li>
            </ul>

            <h3 className="subsection-heading">Built With</h3>
            <ul className="tech-list">
              <li>React + TypeScript + Vite</li>
              <li>React Router for navigation</li>
              <li>Tailwind CSS for styling</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  )
}
