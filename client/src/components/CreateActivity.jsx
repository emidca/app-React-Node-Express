import React, {useState,useEffect} from "react";
import { Link,  } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getCountries, postActivities} from "../actions";


export default function CreateActivity() {
    const dispatch = useDispatch()
    const [, setError] = useState({})
    const countries = useSelector((state => state.countries))
    const [input, setInput] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countries:[]
    })


    function validate(input) {
        if(!input.name){
            alert("Se requiere un nombre") 
        }else if(!input.difficulty){
            alert ("Se requiere poner una dificultad")
        }else if(!input.duration){
           alert ("Poner hora o dias (ej: 9 horas)")
        }else if(!input.season){
           alert ("Se requiere una temporada")
        }else if(input.countries < 1){
           alert ("Selecciona los paises en donde creaste tu actividad")
        }
    }

    function hadleSubmit(e) {
        e.preventDefault()
        dispatch(postActivities(input))
        setError (validate({
            ...input,
            [e.target.value]: e.target.value
        }))
        alert("CREATED!")
        setInput({
            name:"",
            difficulty:"",
            duration:"",
            season:"",
            countries:[]
        })
    }
    
    function hadleDifficulty(e) {
        setInput({
            ...input,
            difficulty: e.target.value
        })
    }

    function hadleSelect(ev) {
        setInput({
            ...input,
            countries: [...input.countries, ev.target.value]
        })
    }


    function hadleChange(e){  // para imputs
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)
    }

    function hadleSeason(e) {
        setInput({
            ...input,
            season: e.target.value
        })
    }

    function hadleDelete(ev) {
        setInput({
            ...input,
            countries: input.countries.filter(el => el !== ev)
        })
    }
  
    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])

    

    return (
        <div>
            <Link to="/home"><button>Home</button></Link>
            <h1>Create Activity !</h1>
            <form onSubmit={(e)=>hadleSubmit(e)}>
                <div>
                    <label>Name:</label>                                                     
                    <input type="text"
                     value={input.name}
                     name="name"
                     onChange={hadleChange}
                     ></input>
                </div>

                <div>
                    <label>Difficulty:</label>
                    <select onChange={(ev) => hadleDifficulty(ev)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    </select>
                </div>

                <div>
                    <label>Duration:</label>
                    <input  
                    type = 'string' 
                    value = {input.duration} 
                    name ='duration'
                    onChange={hadleChange}
                    ></input>
                </div>

                <div>
                    <label>Season:</label>
                    <select onChange={(ev) => hadleSeason(ev)}>
                    <option value ='Summer'>Summer</option>
                    <option value ='Winter'>Winter</option>
                    <option value='Autumn'>Autumn</option>
                    <option value='Spring'>Spring</option>
                    <option value='All'>All Year</option>
                    </select>
                </div>

                <label>Countrie:
                    <select onChange={(e) => hadleSelect(e)}>
                    {countries.map((e)=>(
                        <option value ={e.id} >{e.name} </option>
                    ))}
                </select>
                </label>
                <div>       
                <button type="submit">Submit</button>
                </div> 
            </form>

            {input.countries.map(el=>
                <div>
                    <h6>{el}</h6>
                    <button onClick={()=> hadleDelete(el)}>X</button>
                </div>)}
        </div>
    )
}