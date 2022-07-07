import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NavLinkProp } from './types'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import Container from '../Container'
import './styles.scss'

const Header: React.FC = () => {
  const navLinkStyles = ({ isActive }: NavLinkProp) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    };
  };

  return (
    <section className="header">
      <header>
        <Container>
          <nav>
            <ul>
              <div className="logo">
                <Link to="/">
                  <BsFillHouseDoorFill size={20} title="Home page" />
                </Link>
              </div>
              <div className="links">
                <NavLink
                  style={navLinkStyles}
                  title="About page"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  style={navLinkStyles}
                  title="Projects page"
                  to="/projects"
                >
                  Projects
                </NavLink>
              </div>
            </ul>
          </nav>
        </Container>
      </header>
    </section>
  )
}

export default Header