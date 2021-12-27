import React from 'react'

const KeyValuePair = ({ pairs }) => {
  return (
    <>
      {pairs.map(h => {
        return <dl key={h.key}>
          <dt>{h.key}</dt>
          <dd>{h.value}</dd>
        </dl>
      })}
    </>
  )
}

export default KeyValuePair
