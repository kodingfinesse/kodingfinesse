import React from 'react'
import Container from 'react-bootstrap/Container'
import darren from '../assets/Resume.pdf'

export const Resume = () => {
  return(
    <Container className="outside">
      <iframe src={darren + "#toolbar=0"} />
    </Container>
  )
}