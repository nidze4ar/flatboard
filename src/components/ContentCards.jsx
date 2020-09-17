import React from 'react'
import Card from './Card'
import './ContentCards.css'

const ContentCards = ({data, setFlatRating, ratingState}) => {
  const isChoosed = id => ratingState.includes(id) ? true: false
  return (
    <div className='card_container' >
      {data.map(v => <Card key={v.id} {...v} choosed={isChoosed(v.id)} setFlatRating={setFlatRating} />)}
    </div>
  )
}

export default ContentCards