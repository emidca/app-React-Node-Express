import React from 'react'


export default function Card({name, flags, continents, id}) {
  return (
    <React.Fragment>
      
        <div className='Card'>
          <h3 >{name}</h3>
          <h5>{continents}</h5>
          <img src={flags} alt='flag not found' width="200px" height="100px"/>
        </div>
   
    </React.Fragment>
  )
}