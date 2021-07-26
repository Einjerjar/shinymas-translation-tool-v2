import React from 'react'
import PropTypes from 'prop-types'

import { useDataSet } from '@/state/DataSet'

// Cant figure out how to infer PropTypes (dynamic/runtime) from
//  TS type defs (compile-time) so ended up with this
const propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    trans: PropTypes.string.isRequired,
  }).isRequired
}

type SideCardPropTypes = PropTypes.InferProps<typeof propTypes>

const SideCard :React.FC<SideCardPropTypes> = ({ item }) => {

  const {
    tryGetName
  } = useDataSet()

  const barClass = () =>
    item.trans.trim().length == 0
      ? 'side-card-warn'
      : ''

  return (
    <div className={`card side-card ${barClass()}`}>
      <div className="card-header">
        <div className=".side-card-id">
          {item.id}
        </div>
        <div className="side-card-name">
          {tryGetName(item.name)}
        </div>
      </div>
      <div className="separator-d bg-gray-400 dark:bg-gray-800"></div>
      <div className="card-body">
        {item.text}
      </div>
    </div>
  )
}

SideCard.propTypes = propTypes

export default SideCard
