import React from 'react'
import { Link } from 'react-router-dom'
import { useMyselfData } from '../../hooks/useMyselfData'
import './styles.scss'

const ProjectList: React.FC = () => {
  const { me } = useMyselfData()

  return (
    <div className="project_list">
      {me.projects.map((project) => (
        <Link key={project.id} to={`/project/${project.id}`}>
          <div className="project_item">
            <h3>{project.name}</h3>
            <div className="src">
              <p>{project.src}</p>
            </div>
            <div className="techs">
              <span>Techs:</span>
              {project.techs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProjectList