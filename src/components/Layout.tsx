import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import './Layout.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="site-header">
        <NavLink to="/" className="logo-link">
          <span className="logo">DP</span>
          <span className="site-name">Design Patterns</span>
        </NavLink>
        <nav aria-label="Pattern categories">
          <NavLink
            to="/creational"
            className={({ isActive }: { isActive: boolean }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
            end
          >
            Creational
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>Design Patterns Teaching Web App — Learn GoF Design Patterns</p>
      </footer>
    </>
  )
}
