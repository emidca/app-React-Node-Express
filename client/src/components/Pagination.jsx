import React from 'react'
import "./Css-components/Pagination.css"

export default function Pagination({countries,pagination,countriesPerPage}) {

  const PageNumber =[]

    for (let i = 1; i<=Math.ceil(countries/countriesPerPage); i++) {
        PageNumber.push(i)
    }

    return( 
        <div className="pagination">
            {
                PageNumber && PageNumber.map(n => {return (
                    <button onClick={()=>pagination(n)} key={n}>{n}</button>    
                )
                })
            }
        </div>
     
        )
    }










