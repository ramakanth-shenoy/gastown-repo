import { Link } from 'react-router-dom'
import CodePlayground from '../../components/CodePlayground'
import './PatternLayout.css'

interface PatternPageProps {
  title: string
  tagline: string
  problemTitle: string
  problem: string
  umlSvg: React.ReactNode
  code: { label: string; source: string }[]
  useCases: { title: string; description: string }[]
}

export default function PatternLayout({
  title,
  tagline,
  problemTitle,
  problem,
  umlSvg,
  code,
  useCases,
}: PatternPageProps) {
  return (
    <div className="page-container">
      <Link to="/creational" className="back-link">
        ← Creational Patterns
      </Link>

      <article className="pattern-page">
        <header className="pattern-header">
          <h1 className="pattern-title">{title}</h1>
          <p className="pattern-tagline">{tagline}</p>
        </header>

        <section className="section" aria-labelledby="problem-heading">
          <h2 className="section-heading" id="problem-heading">
            {problemTitle}
          </h2>
          <div className="section-body">
            <p>{problem}</p>
          </div>
        </section>

        <section className="section" aria-labelledby="uml-heading">
          <h2 className="section-heading" id="uml-heading">
            UML Diagram
          </h2>
          <div className="uml-container">{umlSvg}</div>
        </section>

        <section className="section" aria-labelledby="code-heading">
          <h2 className="section-heading" id="code-heading">
            Code Example
          </h2>
          <div className="code-stack">
            {code.map(({ label, source }) => (
              <CodePlayground
                key={label}
                label={label}
                initialCode={source}
                language="typescript"
              />
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="usecases-heading">
          <h2 className="section-heading" id="usecases-heading">
            Real-World Use Cases
          </h2>
          <ul className="usecase-list">
            {useCases.map(({ title, description }) => (
              <li key={title} className="usecase-item">
                <h3 className="usecase-title">{title}</h3>
                <p className="usecase-desc">{description}</p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  )
}
