import React, {useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getActivietes, getCountries, postActivities} from "../actions";


export default function CreateActivity() {
    const dispatch = useDispatch()
    const countries = useSelector((state => state.countries))

    const [input, setInput] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countryid:[]
    })

    function hadleDifficulty(ev) {
        setInput({
            ...input,
            dificultad: ev.target.value
        })
    }

    function hadleChange(ev){
        setInput    ({
            ...input,
            [ev.target.name] : ev.target.value
        })
    }

    function hadleSeason(ev) {
        setInput({
            ...input,
            temporada: ev.target.value
        })
    }
  
    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])

    return (
        <div>
            <Link to="/home"><button>Home</button></Link>
            <h1>Create Activity !</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" value={input.name} name="name"></input>
                </div>
                <div>
                    <label onChange = {(e)=> hadleDifficulty(e)} >Difficulty:</label>
                    <select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    </select>
                </div>
                <div>
                    <label>Duration:</label>
                    <input  type = 'string' value = {input.duration} name ='duration'></input>
                </div>
                <div>
                    <label>Season:</label>
                    <select>
                    <option value ='Summer'>Summer</option>
                    <option value ='Winter'>Winter</option>
                    <option value='Autumn'>Autumn</option>
                    <option value='Spring'>Spring</option>
                    <option value='All'>All Year</option>
                    </select>
                </div>
                <label>Countrie:
                    <select>
                    {countries.map((ev)=>(
                        <option value ={ev.id} >{ev.name} </option>
                    ))}
                </select>
                </label>
            </form>

        </div>
    )
}


