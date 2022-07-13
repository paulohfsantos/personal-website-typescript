import React from 'react'
import { useMyselfData } from '../../hooks/useMyselfData'
import { FaReact, FaVuejs, FaNodeJs, FaHtml5, FaSass, FaCaretRight } from 'react-icons/fa'
import { SiPostgresql, SiTypescript, SiJavascript } from 'react-icons/si'
import Container from '../Container'
import './styles.scss'
import { Link } from 'react-router-dom'

const Main: React.FC = () => {
  const { me } = useMyselfData()

  const margin = { marginRight: '10px' }

  const skillsArrIcons = [
    <FaHtml5 color='#ff6347' size={20} style={margin} />,
    <FaSass color='#cc6699' size={20} style={margin} />,
    <SiJavascript color='#d6d44a' size={20} style={margin} />,
    <SiTypescript color='#5275b8' size={20} style={margin} />,
    <FaReact color='#04d8f9' size={20} style={margin} />,
    <FaVuejs color='#41B883' size={20} style={margin} />,
    <FaNodeJs color='#6cc24a' size={20} style={margin} />,
    <SiPostgresql color='#0064a5' size={20} style={margin} />
  ]

  const skills = me.skills.map((skill, index) => {
    return (
      <li key={index}>
        {skillsArrIcons[index]}
        <span>{skill}</span>
      </li>
    )
  })

  const projHome = me.projects.map((project, index) => {
    return (
      <a href={project.src} target='_blank' key={index}>
        <li>{project.name}</li>
      </a>
    )
  })

  const firstName = me.name.split(' ')

  return (
    <section className="main">
      <main>
        <div className="main_content">
          <div className="welcome">
            <Container>
              <h3>Welcome! I'm {firstName[0]}</h3>
            </Container>
          </div>
          
          {/* <div className="description">
            <Container>
              <h4>About</h4>
              <p>{me.about}</p>
            </Container>
          </div> */}

          <div className="skills">
            <Container>
              <h4>Skills</h4>
              <ul>{skills}</ul>
            </Container>
          </div>

          <div className="project_list_home">
            <Container>
              <h4>Projects</h4>

              <ul>{projHome}</ul>

              <div className="more">
                <Link to="/projects">More <FaCaretRight /> </Link>
              </div>
            </Container>
          </div>

          <div className="contact">
            <Container>
              <h4>Contact</h4>
              <a href={`mailto:${me.email}`}>{me.email}</a>
            </Container>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Main