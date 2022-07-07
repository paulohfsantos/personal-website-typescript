import React from 'react'
import Container from '../../components/Container'
import { useMyselfData } from '../../hooks/useMyselfData'
import './styles.scss'

const Projects: React.FC = () => {
  const { me } = useMyselfData()

  return (
    <section className="projects">
      <Container>
        <h3>Projects</h3>

        <div className="block">
          projects
        </div>
      </Container>
    </section>
  )
}

export default Projects