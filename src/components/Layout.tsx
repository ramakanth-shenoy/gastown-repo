import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import type { ReactNode, FormEvent } from 'react'
import './Layout.css'

export default function Layout({ children }: { children: ReactNode }) {
  const [navOpen, setNavOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (navOpen && navRef.current) {
      const firstFocusable = navRef.current.querySelector('a') as HTMLElement | null
      firstFocusable?.focus()
    }
  }, [navOpen])

  useEffect(() => {
    const handleKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && navOpen) {
        setNavOpen(false)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [navOpen])

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const subject = encodeURIComponent('Newsletter subscription')
    const body = encodeURIComponent(
      `I would like to subscribe to the newsletter with email: ${email}`,
    )
    window.location.href = `mailto:newsletter@designpatterns.example?subject=${subject}&body=${body}`
  }

  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>

      <header className="site-header" role="banner">
        <NavLink to="/" className="logo-link" aria-label="Design Patterns home">
          <span className="logo" aria-hidden="true">
            DP
          </span>
          <span className="site-name">Design Patterns</span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={navOpen}
          aria-controls="primary-nav"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="hamburger-icon" aria-hidden="true" />
        </button>

        <nav
          ref={navRef}
          id="primary-nav"
          className={`site-nav ${navOpen ? 'nav-open' : ''}`}
          aria-label="Pattern categories"
          role="navigation"
        >
          <NavLink
            to="/creational"
            className={({ isActive }: { isActive: boolean }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
            end
            onClick={() => setNavOpen(false)}
            tabIndex={navOpen ? 0 : -1}
          >
            Creational
          </NavLink>
          <NavLink
            to="/structural"
            className={({ isActive }: { isActive: boolean }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setNavOpen(false)}
            tabIndex={navOpen ? 0 : -1}
          >
            Structural
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setNavOpen(false)}
            tabIndex={navOpen ? 0 : -1}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }: { isActive: boolean }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setNavOpen(false)}
            tabIndex={navOpen ? 0 : -1}
          >
            About
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }: { isActive: boolean }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setNavOpen(false)}
            tabIndex={navOpen ? 0 : -1}
          >
            Help
          </NavLink>
        </nav>
      </header>

      {navOpen && (
        <div className="nav-overlay" aria-hidden="true" onClick={() => setNavOpen(false)} />
      )}

      <main id="main-content" role="main" tabIndex={-1}>
        {children}

        <aside className="newsletter" aria-labelledby="newsletter-heading">
          <h2 id="newsletter-heading">Stay Updated</h2>
          <p>Get notified when new patterns and examples are added.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label htmlFor="email-input" className="newsletter-label">
              Email address
            </label>
            <div className="newsletter-input-row">
              <input
                id="email-input"
                type="email"
                name="email"
                className="newsletter-input"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </div>
          </form>
        </aside>
      </main>

      <footer className="site-footer" role="contentinfo">
        <p>Design Patterns Teaching Web App — Learn GoF Design Patterns</p>
      </footer>
    </>
  )
}
