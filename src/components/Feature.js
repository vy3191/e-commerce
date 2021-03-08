import React from 'react'

function Feature({feature, add}) {
  return (
    <div className="feature">
      <button onClick={() =>add(feature)}>Add</button>
      {feature.name} {feature.price}
    </div>
  )
}

export default Feature
