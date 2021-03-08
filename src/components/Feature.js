import React from 'react'

function Feature({feature}) {
  return (
    <div className="feature">
      <button>Add</button>
      {feature.name} {feature.price}
    </div>
  )
}

export default Feature
