import React, {useState,useEffect} from "react";
import { Link,  } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getCountries, postActivities} from "../actions";
import "./Css-components/CreateActivity.css"


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
            return alert("A name is required")
        }else if(!input.difficulty){
            return alert ("Difficulty required")
        }else if(!input.duration){
           return alert ("Set time or days")
        }else if(!input.season){
            return alert ("One season is required")
        }else if(input.countries < 1){
            return alert ("Select the countries where you created your activity")
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

            <br></br>
            <br></br>
            <br></br>
            <Link to="/home"><button>Home</button></Link>
            <div className="formactivity">
            <h1 className="tittleactivitie">Create Activity !</h1>
            <form onSubmit={(e)=>hadleSubmit(e)}>
                <div>
                    <label className="formtittles">Name:</label>                                                     
                    <input type="text"
                     value={input.name}
                     name="name"
                     onChange={hadleChange}
                     ></input>
                </div>
                <br></br>

                <div>
                    <label className="formtittles">Difficulty:</label>
                    <select onChange={(ev) => hadleDifficulty(ev)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    </select>
                </div>
                <br></br>

                <div>
                    <label className="formtittles">Duration:</label>
                    <input  
                    type = 'string' 
                    value = {input.duration} 
                    name ='duration'
                    onChange={hadleChange}
                    ></input>
                </div>
                <br></br>

                <div>
                    <label className="formtittles">Season:</label>
                    <select onChange={(ev) => hadleSeason(ev)}>
                    <option value ='Summer'>Summer</option>
                    <option value ='Winter'>Winter</option>
                    <option value='Autumn'>Autumn</option>
                    <option value='Spring'>Spring</option>
                    <option value='All'>All Year</option>
                    </select>
                </div>
                <br></br>

                <label className="formtittles">Countrie:
                    <select onChange={(e) => hadleSelect(e)}>
                    {countries.map((e)=>(
                        <option value ={e.id} >{e.name} </option>
                    ))}
                </select>
                </label>
               
                <div>       
                <br></br>
                <button type="submit">Submit</button>
                </div> 
            </form>
            </div>
          
                        <div className="DeleteCountries">
            {input.countries.map(el=>
                <div>
                    <h6>{el}</h6>
                    <button onClick={()=> hadleDelete(el)}>Remove</button>
                </div>)}
                        </div>
        </div>
        
    )
}


// {/* <div class="form">
// <div class="title">Welcome</div>
// <div class="subtitle">Let's create your activity!</div>
// <div class="input-container ic1">
//   <input id="firstname" class="input" type="text" placeholder=" " />
//   <div class="cut"></div>
//   <label for="firstname" class="placeholder">First name</label>
// </div>
// <div class="input-container ic2">
//   <input id="lastname" class="input" type="text" placeholder=" " />
//   <div class="cut"></div>
//   <label for="lastname" class="placeholder">Last name</label>
// </div>
// <div class="input-container ic2">
//   <input id="email" class="input" type="text" placeholder=" " />
//   <div class="cut cut-short"></div>
//   <label for="email" class="placeholder">Email</>
// </div>
// <button type="text" class="submit">submit</button>
// </div> */}