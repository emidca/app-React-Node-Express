import React,{useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getCountries,filterCountriesByContinent } from "../actions/index";
import { Link } from "react-router-dom";
import Card from "./Card";
import Pagination from "./Pagination";

export default function Home (){
    const dispatch = useDispatch();                                   // ejecuto dispatch en una variable
    const countries = useSelector((state)=> state.countries)          // traigo el estado que quiero
    const [currentPage, setcurrentPage] = useState(1);                // se inicia en la primera pagina
    const [countriesPerPage] = useState(10);                         //cantidad de cards que se van a mostrar por pagina
    const lastCountry = currentPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountriesPage = countries.slice(firstCountry, lastCountry);
    const pagination = (pageNumber)=>{setcurrentPage(pageNumber)}
    
    useEffect(() =>{
        setcurrentPage(1)
        dispatch(getCountries());
    },[dispatch])
    
    function handleClick(e){
    e.preventDefault();
    dispatch(getCountries())
}
  
    function handleFilterByContinent(e){
        dispatch(filterCountriesByContinent(e.target.value))
    }

    return (
        <React.Fragment>
                <div>
                    <h1>Countries Page</h1>
                    <Link to="/countrie">Create Countrie</Link>
                    
                </div>
                <button onClick={e=>{handleClick(e)}}>Reload Countries</button>
                <div>
                 <select onChange={e => handleFilterByContinent(e)}>
                 <option value ='All'>All</option>
                 <option value='Americas'>Americas</option>
                 <option value='Africa'>Africa</option>
                 <option value ='Asia'>Asia</option>
                 <option value='Europe'>Europe</option>
                 <option value='Oceania'>Oceania</option>
                 <option value='Polar'>Polar</option>
                 </select>
                 <select>
                     <option value="asc">Ascending</option>
                     <option value="desc">Descending</option>
                 </select>
                </div>
               
            <div>
            {  currentCountriesPage.length > 0 ? currentCountriesPage.map(c => {
                return(
                    <div key={c.id}>
             <Card key={c.id} name={c.name} continents={c.continents} flags={c.flags}/>
                 </div>
             )}):<h1>404</h1> }
             <Pagination
             countries = {countries.length}
             pagination={pagination}
             countriesPerPage={countriesPerPage}
             />
        </div>
            
            </React.Fragment>
    )
}










// POPULATION
//CONTINENTES
//ACTIVIDAD TURISTA
//ADC,DESC