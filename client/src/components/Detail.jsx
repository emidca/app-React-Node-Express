import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import "./Css-components/Detail.css"
 

export default function Detail() {
    const dispatch =  useDispatch()
    const {id}= useParams()

useEffect(()=>{
    dispatch(getDetail(id))
},[dispatch,(id)])

const country = useSelector((state)=> state.detail)
return (
    <div><br></br>
    <div>
        <Link to='/home'><button>Back</button></Link>
        </div>
        <br></br>
        
        {
            
            
            country?
            <div className="detailscontainer">
        
            
                <h1>{country.name}</h1>
                <img src = {country.flags} alt='Imagen no encontrada' width='250px' height='175px' />
                <h2>Continent: {country.continents}</h2>
                <h3>Capital: {country.capital}</h3>
                <h4>Subregion: {country.subregion}</h4>
                <h5>Area: {country.area}</h5>
                <h5>Poblation: {country.population}</h5>
                <div>{country.activities?.map(e => {
                return(
                <div className="detailactivities">
                <h6>Actividad: {e.name} </h6>
                
                <h6>Dificultad: {e.difficulty} </h6>
                
                <h6>Temporada: {e.season} </h6>
               
                <h6>Duracion: {e.duration}</h6>
                </div>
                )})}</div>
            </div> : <p>No encontramos los detalles</p>
        }
        
    </div>
 )
}