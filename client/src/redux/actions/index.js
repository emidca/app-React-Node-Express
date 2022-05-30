//import axios from "axios";
export const GET_COUNTRIES = 'GET_COUNTRIES'; 


export const getCountries = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/countries")
        .then(info => info.data.json())
        .then(info =>{
            return dispatch({
                type: GET_COUNTRIES,
                payload: info
            })
        })
    }
}

// export function getCountries(){
//     return async function(dispatch){
//         var json = await axios.get("http://localhost:3001/countries")
//         return dispatch({
//             type: "GET_COUNTRIES",
//             payload: json.data
//         })
//     }
// }