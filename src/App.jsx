import React from 'react'
import styled from 'styled-components'
import './App.css'
import Header from './sections/Header/Header'
import About from './sections/About/About'
import Experience from './sections/Experience/Experience'
import Education from './sections/Education/Education'
import Projects from './sections/Projects/Projects'
import Habilities from './sections/Habilities/Habilities'
import Certificates from './sections/Certificate/Certificates'

function App() {
  return (
    <Container>
      <Header />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Certificates />
      <Habilities />
    </Container>
  )
}

export default App

const Container = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 4em;
  width: 700px;
  margin: 0 auto;

  @media (width <= 700px) {
    width: auto;
  }

  @media print{
    /* padding: 2rem;  */
    /* width: 100%;  */
    page-break-before: always;
    margin: 2em 0;
    @page{
      margin: 1cm 2cm;
    }
  }
`