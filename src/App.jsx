import React from 'react'
import styled from 'styled-components'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Habilities from './components/Habilities/Habilities'

function App() {
  return (
    <Container>
      <Header />
      <About />
      <Experience />
      <Education />
      <Projects />
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
    margin: 0;
    @page{
      margin: .5cm 2cm;
    }
  }
`