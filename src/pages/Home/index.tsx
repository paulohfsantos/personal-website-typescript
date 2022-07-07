import React from 'react'
import Container from '../../components/Container'
import { useMyselfData } from '../../hooks/useMyselfData'
import './styles.scss'

const Home: React.FC = () => {
  const { me } = useMyselfData()

  return (
    <section className="home">
      <Container>
        <h1>{me.name}</h1>
      </Container>
    </section>
  )
}

export default Home