import React from 'react'
import "./Css-components/Card.css"


export default function Card({name, flags, continents, id}) {
  return (
    <React.Fragment>
      
        {/* <div className='Card'>
          <div>{name}</div>
          <h5>{continents}</h5>
          <img src={flags} alt='flag not found' className='flagimg'/>
        </div> */}

<div class="card">
    <img src={flags} alt='flag not found' className='flagimg'/>
  <div class="card-details">
    <p class="text-title">{name}</p>
    <p class="text-body">{continents}</p>
  </div>
  <button class="card-button">Details</button>
</div>
   
    </React.Fragment>
  )
}

