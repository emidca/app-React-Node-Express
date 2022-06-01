import axios from "axios";
export const GET_COUNTRIES = 'GET_COUNTRIES'; 
export const BY_SEARCH = 'BY_SEARCH'; 
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const FILTER_CREATED = 'FILTER_CREATED'; 




export function getCountries(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/countries")
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
}

export function filterCountriesByContinent(payload){
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export function filterCountriesCreated(payload){
    return {
        type: FILTER_CREATED,
        payload
    }
}




// export function CountryBySearch(payload){
//     return {
//         type: BY_SEARCH,
//         payload
//     }
// }




// export const getCountries = () => {
//     return (dispatch) => {
//         fetch("http://localhost:3001/countries")
//         .then(info => info.data.json())
//         .then(info =>{
//             return dispatch({
//                 type: GET_COUNTRIES,
//                 payload: info
//             })
//         })
//     }
// }