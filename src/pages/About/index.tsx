import React from 'react'
import Container from '../../components/Container'
import { useMyselfData } from '../../hooks/useMyselfData'
import './styles.scss'

const About: React.FC = () => {
  const { me } = useMyselfData()

  return (
    <section className="about">
      <Container>
        <h3>About</h3>

        <div className="block">
          <p>{me.about}</p>
        </div>
      </Container>
    </section>
  )
}

export default About