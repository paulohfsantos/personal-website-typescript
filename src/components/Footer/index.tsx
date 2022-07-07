import React from 'react'
import Container from '../Container'
import { useMyselfData } from '../../hooks/useMyselfData'
import './styles.scss'

const Footer: React.FC = () => {
  const date = new Date().getFullYear()
  const { me } = useMyselfData()

  const getGithubURL = me.links.map(i => i.url).find(i => i.includes('github'))

  return (
    <footer>
      <Container>
        <p>
          © {date} | Created by
          <a href={getGithubURL} target="_blank"> me </a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer