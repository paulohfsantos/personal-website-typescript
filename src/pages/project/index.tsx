import React from 'react'
import Container from '../../components/Container'
import { useMyselfData } from '../../hooks/useMyselfData'
import { useParams } from 'react-router-dom'
import './styles.scss'

const Project: React.FC = () => {
  const { me } = useMyselfData()
  const param = useParams()
  const project = me.projects.map((project) => project.id)

  const projectIteration = () => {
    for (let i = 0; i < me.projects.length; i++) {
      if (Number(param.id) == project[i]) {
        return (
          <>
            <h3>{me.projects[i].name}</h3>

            <div className="block">
              <p>{me.projects[i].src}</p>
            </div>
          </>
        )
      }
    }
  }

  return (
    <section className="project">
      <Container>
        <h3>Project {param.id}</h3>

        {projectIteration()}
      </Container>
    </section>
  )
}

export default Project