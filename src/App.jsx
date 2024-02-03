import React from 'react'
import styled from 'styled-components'
import Header from './components/Header/header'
import About from './components/About/About'
import './App.css'
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
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 4em;
  width: 700px;
  margin: 0 auto;

  @media print{
    padding: 4rem 2rem;
  }
`