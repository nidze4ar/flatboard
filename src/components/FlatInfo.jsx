import React from 'react'
import './FlatInfo.css'

const FlatInfo = ({title, address, area}) => {
  return (
    <div className='container_flatinfo'>
      <p>{title}</p>
      <p>{address}</p>
      <p>{area}</p>
    </div>
  )
}

export default FlatInfo