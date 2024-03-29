import React from 'react'
import styled from 'styled-components'

const Section = ({ title, children }) => {
    return (
        <Container>
            {
                title && <h2>{title}</h2>
            }
            {children}
        </Container>
    )
}

export default Section

const Container = styled.section`
    max-width: 700px;
  h2 {
    /* margin-bottom: 8px; */
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem;
    margin-bottom: 18px;
    
  }

  @media (width <= 700px) {
    section {
    }
  }
`