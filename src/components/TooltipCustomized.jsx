import React from 'react'
import { Tooltip } from 'react-tooltip'
import styled from 'styled-components'

function TooltipCustomized({ id }) {
  return (
    <Container>
      <Tooltip className='toolTip' id={id} />
    </Container>
  )
}

export default TooltipCustomized

const Container = styled.div`
  
  .toolTip{
    border-radius: 20px;
  }
`