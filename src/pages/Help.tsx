import { Link } from 'react-router-dom'
import './Help.css'

export default function HelpPage() {
  return (
    <div className="page-container">
      <Link to="/" className="back-link">
        ← Home
      </Link>

      <article className="help-page">
        <header className="page-header">
          <h1 className="page-title">Help & Documentation</h1>
          <p className="page-tagline">
            Guide to using the interactive playground and navigating the application
          </p>
        </header>

        <section className="section" aria-labelledby="navigation-heading">
          <h2 className="section-heading" id="navigation-heading">
            Navigation
          </h2>
          <div className="section-body">
            <p>
              Use the navigation menu at the top of the page to explore different pattern
              categories. The menu includes:
            </p>
            <ul className="feature-list">
              <li>
                <strong>Home</strong> — Return to the main landing page
              </li>
              <li>
                <strong>Creational</strong> — Explore patterns that handle object creation
              </li>
              <li>
                <strong>Structural</strong> — Explore patterns that compose objects and classes
              </li>
              <li>
                <strong>About</strong> — Learn about the application purpose and credits
              </li>
              <li>
                <strong>Help</strong> — This documentation page
              </li>
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="interactivity-heading">
          <h2 className="section-heading" id="interactivity-heading">
            Interactive Playground
          </h2>
          <div className="section-body">
            <p>
              Each pattern page includes interactive elements to help you understand the concepts:
            </p>

            <h3 className="subsection-heading">Code Examples</h3>
            <p>Code examples are displayed with syntax highlighting. You can:</p>
            <ul className="feature-list">
              <li>
                <strong>Read</strong> — Study the implementation line by line
              </li>
              <li>
                <strong>Copy</strong> — Select and copy code to experiment in your own environment
              </li>
              <li>
                <strong>Modify</strong> — Paste code into your IDE and experiment with changes
              </li>
            </ul>

            <h3 className="subsection-heading">UML Diagrams</h3>
            <p>
              The UML diagrams show the structural relationships between classes and interfaces.
              Hover over elements to see relationships more clearly on desktop devices.
            </p>

            <h3 className="subsection-heading">Use Cases</h3>
            <p>
              Real-world use cases provide context for when and why to apply each pattern. Study
              these examples to build intuition for pattern selection.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="keyboard-heading">
          <h2 className="section-heading" id="keyboard-heading">
            Keyboard Shortcuts
          </h2>
          <div className="section-body">
            <table className="shortcut-table">
              <thead>
                <tr>
                  <th scope="col">Shortcut</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <kbd>Tab</kbd>
                  </td>
                  <td>Navigate between interactive elements</td>
                </tr>
                <tr>
                  <td>
                    <kbd>Enter</kbd>
                  </td>
                  <td>Activate links and buttons</td>
                </tr>
                <tr>
                  <td>
                    <kbd>Space</kbd>
                  </td>
                  <td>Toggle mobile navigation menu</td>
                </tr>
                <tr>
                  <td>
                    <kbd>Esc</kbd>
                  </td>
                  <td>Close mobile navigation menu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section" aria-labelledby="accessibility-heading">
          <h2 className="section-heading" id="accessibility-heading">
            Accessibility Features
          </h2>
          <div className="section-body">
            <ul className="feature-list">
              <li>
                <strong>Skip Navigation</strong> — Press Tab on page load to skip to main content
              </li>
              <li>
                <strong>Keyboard Navigation</strong> — All interactive elements are accessible via
                keyboard
              </li>
              <li>
                <strong>Screen Reader Support</strong> — Proper heading structure and ARIA labels
              </li>
              <li>
                <strong>High Contrast Mode</strong> — Supports system preference for increased
                contrast
              </li>
              <li>
                <strong>Reduced Motion</strong> — Respects system preference for reduced animations
              </li>
              <li>
                <strong>Dark Mode</strong> — Automatically adapts to system color scheme
              </li>
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="tips-heading">
          <h2 className="section-heading" id="tips-heading">
            Learning Tips
          </h2>
          <div className="section-body">
            <h3 className="subsection-heading">Practice Recognition</h3>
            <p>
              The key to mastering design patterns is recognizing when to use them. As you read
              through problems, ask yourself: "What design principle is being violated here?" The
              answer often points to a pattern solution.
            </p>

            <h3 className="subsection-heading">Start Simple</h3>
            <p>
              Begin with Singleton and Factory Method patterns. They are the most commonly used and
              easiest to understand. Build confidence before tackling more complex patterns like
              Abstract Factory or Bridge.
            </p>

            <h3 className="subsection-heading">Draw Diagrams</h3>
            <p>
              Sketch the UML diagrams on paper as you read. This active engagement helps reinforce
              your understanding of the relationships between classes.
            </p>

            <h3 className="subsection-heading">Code It Yourself</h3>
            <p>
              After reading a pattern, close the page and try to implement it from memory. Compare
              your implementation with the example and note differences.
            </p>
          </div>
        </section>
      </article>
    </div>
  )
}
