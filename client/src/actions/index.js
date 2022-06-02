import axios from "axios";
export const GET_COUNTRIES = 'GET_COUNTRIES'; 
export const GET_SEARCH = "GET_SEARCH";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const FILTER_BY_ALFABETIC = "FILTER_BY_ALFABETIC"




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

export function filtradoAlfabetic(payload) {
    return{
        type: FILTER_BY_ALFABETIC,
        payload
    }
}

export function getSearch(name) {
    return async function (dispatch) {
        try{
        var json = await axios.get("http://localhost:3001/countries?name=" + name)
        console.log(json.data)
        return dispatch ({
            type : GET_SEARCH,
            payload : json.data
        })
        }catch(e){
            console.log(e);
}}}




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