import React from 'react'
import Container from '../../components/Container'
import Main from '../../components/Main'
import { useMyselfData } from '../../hooks/useMyselfData'
import './styles.scss'

const Home: React.FC = () => {
  const { me } = useMyselfData()

  return (
    <section className="home">
      <Container>
        <Main />
      </Container>
    </section>
  )
}

export default Home