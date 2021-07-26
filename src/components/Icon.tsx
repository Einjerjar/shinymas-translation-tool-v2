import React from 'react'
import PropTypes from 'prop-types'

// Custom component for icons to avoid the import hell
//  from the default iconify lib,
// Downside, cant edit an icon after its rendered
//  (big issue tbh)

const propTypes = {
  icon: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  className: PropTypes.string
}

type IconPropTypes = PropTypes.InferProps<typeof propTypes>

const Icon :React.FC<IconPropTypes> = ({ icon, inline = true, className }) => {
  const cName = className ? className : ''
  return (
    <span className={`iconify ${cName}`} data-icon={icon} data-inline={inline}></span>
  )
}

Icon.propTypes = propTypes

export default Icon
