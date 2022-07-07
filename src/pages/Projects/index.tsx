import React from 'react'
import Container from '../../components/Container'
import ProjectList from '../../components/ProjectList'
import './styles.scss'

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <Container>
        <h3>Projects</h3>

        <ProjectList />
      </Container>
    </section>
  )
}

export default Projects