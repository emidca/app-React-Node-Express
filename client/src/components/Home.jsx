import React,{useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getCountries,filterCountriesByContinent, filtradoAlfabetic, filterActivities, filterByPoblation, getActivities} from "../actions/index";
import { Link } from "react-router-dom";
import Card from "./Card";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import "./Css-components/Card.css"
import "./Css-components/NavBar.css"
import "./Css-components/Home.css"

export default function Home (){
    const dispatch = useDispatch();                                   // ejecuto dispatch en una variable
    const {countries, activities} = useSelector((state)=> state)          // traigo el estado que quiero
    const [currentPage, setcurrentPage] = useState(1);                // se inicia en la primera pagina
    const [countriesPerPage] = useState(10);                         //cantidad de cards que se van a mostrar por pagina
    const [,setOrder] = useState("")
    const lastCountry = currentPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountriesPage = countries.slice(firstCountry, lastCountry);
    const pagination = (pageNumber)=>{setcurrentPage(pageNumber)}

 
    
    useEffect(() =>{
        setcurrentPage(1)
        dispatch(getCountries());
        dispatch(getActivities())
    },[dispatch])

    console.log(countries)
    console.log(currentCountriesPage)
    
    function handleClick(e){
    e.preventDefault();
    dispatch(getCountries())
    }

    function handleAlfa(e){
        e.preventDefault();
        dispatch(filtradoAlfabetic(e.target.value))
        setcurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleFiltradoPoblacion(e){
        e.preventDefault();
        dispatch(filterByPoblation(e.target.value))
        setcurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }
  
    function handleFilterByContinent(e){
        dispatch(filterCountriesByContinent(e.target.value))
        setcurrentPage(1) // e.e
        setOrder(`Ordenado ${e.target.value}`)
    }

    function hadleActivities(e) {
        dispatch(filterActivities(e.target.value))
    }
    

    return (
        <React.Fragment>
             <nav className="nav">
                    <div>
                        <button className="reloadCountries">
                    <Link className="link" to="/activities">Create Activity</Link>
                    </button>
                    </div>
                <div>
                    <h1 className="tittlemain">COUNTRIES PAGE</h1>
                </div>
                
                <div>
                <button className="reloadCountries" onClick={e=>{handleClick(e)}}>Reload Countries</button>
                </div>
            </nav>

            <SearchBar/>
            <br></br>
            <Pagination
            countries = {countries.length}
            countriesPerPage={countriesPerPage}
            pagination={pagination}
            />
            <br></br>
<div className="maincontainer">
            <div className="filtrados">
                <div>
                <h3 className="h3filtrados">Order by Continent</h3>
                 <select className="select-css" onChange={e => handleFilterByContinent(e)}>
                 <option value ='All'>All</option>
                 <option value='Americas'>Americas</option>
                 <option value='Africa'>Africa</option>
                 <option value ='Asia'>Asia</option>
                 <option value ='Antarctic'>Asia</option>
                 <option value='Europe'>Europe</option>
                 <option value='Oceania'>Oceania</option>
                 </select>
                 </div>
               

                <div>
                     <h3 className="h3filtrados">Order by population</h3>
                 <select className="select-css" onChange ={(e) => handleFiltradoPoblacion(e)}>
                    <option value ='asc'>Higher population</option>
                    <option value ='desc'>Lower population</option>
                    </select>
                    </div>
                
                <div>   
                <h3 className="h3filtrados">Order Alphabetically</h3>
                 <select className="select-css" onChange={e => handleAlfa(e)}>
                     <option value="asc">Ascending</option>
                     <option value="desc">Descending</option>
                 </select>
                 <div >
            </div>
           
                
                


        {<div>
              <h3 className="h3filtrados">Select an activity</h3>
          <select className="select-css"  onChange = {e => hadleActivities(e)}>
          <option value = 'All'>Select activity</option>
          {activities.map((e)=>(
            <option value = {e.name} key={e.id}> {e.name} </option>
            ))
          }
          </select>
          </div>
        }
                </div>
          </div>
                
            <div className="ContainerCards">
            {  currentCountriesPage.length ? currentCountriesPage.map(c => {
                return(
                    <div key={c.id}>
                        <Link className="linkcard" to={`/home/${c.id}`}>
             <Card key={c.id} name={c.name} continents={c.continents} flags={c.flags}/>
                        </Link>
                 </div>
            )}): <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
          
          }
            </div>
            
        

            </div> 
    

            </React.Fragment>
    )
}










// POPULATION
//CONTINENTES
//ACTIVIDAD TURISTA
//ADC,DESC