import React from "react";
import {Link} from "react-router-dom"
import "./Css-components/landingpage.css"


export default function LandingPage() {
    return(
    <div className="LandingPage">
        <h1> Contries Page </h1>
        <Link to="/home">
            <button>Ingresar</button>
        </Link>
    </div>
    )
}