import React from 'react'
import { Tooltip } from 'react-tooltip'

function TooltipCustomized({ id }) {
  return (
    <Tooltip className="!rounded-[20px]" id={id} />
  )
}

export default TooltipCustomized