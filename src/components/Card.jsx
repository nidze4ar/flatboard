import React  from 'react'
import './Card.css'
import ThunbUp2 from './../images/ThunbUp2.png';
import FlatInfo from './FlatInfo'

const fotoURL = 'https://avatars.mds.yandex.net/get-pdb/'
const fotolinks = [
  '231404/f9dafa16-0dca-4d5d-a06d-c55f8f68cbe4/s1200',
  '163339/3c6f8d50-6e8d-4ffc-90c7-4320a49a4469/s375',
  '236760/5f563a62-b4ea-4ea5-b9ef-0cd174fdbe4b/s1200',
  '236760/6c65a2c5-ffc2-4b90-8dfb-2689f3781d41/s1200',
  '234183/f75c6be9-f065-4283-b15c-314da28ba0b5/s1200',
  '251121/9d03c6dc-c66d-4754-b482-52b56fcd8dc3/s1200',
  '231404/c8ad8fcb-3406-4868-8896-8ca3cf8beb4d/s1200',
  '163339/7cbaf3ab-a5c2-4aea-aae8-62b77f613164/s1200',
  '202366/fe8f0654-8f44-4208-836e-564f7339f2e7/s1200',
  '199965/223b3c37-4314-440f-8f0e-a1c76471ffec/s1200'  
]
const setFotoStyle = () => {
  return ({
  backgroundImage: `url(${fotoURL}${fotolinks[+Math.random().toString().slice(2,3)]})`,
  backgroundPosition: 'center'
  })
}
const ThunbUpIcon = () => <div className='thumb_up'><img src={ThunbUp2} alt="thunbup" width="50" height="55"/></div>
const Card = ({type, id, attributes, relationships, setFlatRating, choosed}) => {
  const {title, address, area, unit } = attributes
  let addressString = ''
  for (let element in address) {
    addressString += address[element] 
  }
  //const {city, street, house, room } = address
  return (
    <div className='card' style={setFotoStyle()}>
     <FlatInfo title={title} address={addressString} area={area+unit} />      
     <div className='rating-panel' style={{backgroundColor: choosed? 'blue': 'black'}}
      onClick={()=>setFlatRating(id)} >
        <ThunbUpIcon/>
      </div>
    </div>
  )
}
export default Card