import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf([ 'top', 'right', 'down', 'left' ])
}

type PosDirT = 'top'|'right'|'down'|'left'
type TooltipPropTypes = PropTypes.InferProps<typeof propTypes>

const posSets = {
  top: 'bottom-full mb-2 left-2/4 -translate-x-1/2',
  right: 'left-full ml-2 top-2/4 -translate-y-1/2',
  down: 'top-full mt-2 left-2/4 -translate-x-1/2',
  left: 'right-full mr-2 top-2/4 -translate-y-1/2',
}

const Tooltip :React.FC<TooltipPropTypes> = ({ content, children, position }) => {
  const pos: PosDirT = position ? position as PosDirT : 'down'
  const posStyle = posSets[pos]

  return (
    <div className="tooltip-base group">
      <div className={`tooltip-root transform ${posStyle}`}>
        <div className="tooltip-container">
          {content}
        </div>
      </div>
      {children}
    </div>
  )
}

Tooltip.propTypes = propTypes

export default Tooltip
