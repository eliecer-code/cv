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
    /* padding: 2em 0; */
    /* margin: 0 auto 48px; */
  h2 {
    margin-bottom: 8px;
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem;
  }

  @media (width <= 700px) {
    section {
      margin-bottom: 38px;
    }
  }
`