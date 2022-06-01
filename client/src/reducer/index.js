import { FILTER_BY_CONTINENT,
  FILTER_CREATED,
GET_COUNTRIES } from "../actions/index";

const initialState = {
  countries: [],
  allCountries: [],
  activities:[],
  detail: {},
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
        case GET_COUNTRIES:
        return {...state, countries: action.payload}

        case FILTER_BY_CONTINENT:
          const allCount = state.allCountries
          const filter = action.payload === "All" ? allCount : allCount.filter(e => e.continents === action.payload)
        return{...state, countries: filter}
        
        case FILTER_CREATED:
        const createdFilter = action.payload
        
        return{

        }
        
        default:
          return {...state}
    }
}

export default rootReducer; 


