import React from 'react'

function PurchasedItem({item, remove}) {
  return (
    <div className="feature added-feature">
      <button onClick={() => remove(item)}>Remove</button>
      {item.name}
    </div>
  )
}

export default PurchasedItem
