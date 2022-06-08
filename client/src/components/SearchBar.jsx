import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../actions";
import "./Css-components/SearchBar.css"

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function hadleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
    function hadleSubmit(e) {
        e.preventDefault()
        dispatch(getSearch(name))
    }

    return(
        <div>
            <input className="input" type="text" placeholder="Type here ..." onChange={(e)=> hadleInputChange(e)}/>
            <button className="searchbutton" type="submit" onClick={(e) => hadleSubmit(e)}>Search</button>
        </div>
    )
}

