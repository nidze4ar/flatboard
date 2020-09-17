import React, { Fragment, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Loader from './components/Loader'

import ContentCards from './components/ContentCards'
import entities from './entities.json'

const App = () => {
 const [data, setData] = useState([])
 const [choosedFlatId, setChoosedFlatId] = useState([])
 useEffect( () => {
  async function fetchData() { 
  await setTimeout(() => {
    setData(entities.response)
    } , 1500)
  }
  fetchData()
 } ) 
 const setFlatRating = id => {
   if(choosedFlatId.includes(id) ) {
    setChoosedFlatId(choosedFlatId.filter(v => v !== id) )
   } else {
    setChoosedFlatId([...choosedFlatId, id])
   }
 }
  return (
    <Fragment>
      <Header/>
      {data && data.length ? 
        <ContentCards data={data} setFlatRating={setFlatRating} ratingState={choosedFlatId} /> : <Loader/>}
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app') )
