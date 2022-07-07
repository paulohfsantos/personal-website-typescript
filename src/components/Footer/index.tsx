import React from 'react'
import Container from '../Container'
import './styles.scss'

const Footer: React.FC = () => {
  const date = new Date().getFullYear()

  return (
    <footer>
      <Container>
        <p>
          © {date} | Created by
          <a href="https://github.com/paulohfsantos" target="_blank"> me </a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer