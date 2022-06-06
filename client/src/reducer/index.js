import { FILTER_BY_ACTIVITY, FILTER_BY_ALFABETIC, FILTER_BY_CONTINENT, FILTER_BY_POBLACION, GET_ACTIVITIES, GET_COUNTRIES, GET_DETAIL, GET_SEARCH, POST_ACTIVITIES } from "../actions/index";

const initialState = {
  countries: [],
  allCountries: [],
  activities:[],
  detail: {},
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
        case GET_COUNTRIES:
        return {...state, countries: action.payload, allCountries: action.payload}

        case FILTER_BY_CONTINENT:
          const allCount = state.allCountries
          const filter = action.payload === "All" ? allCount : allCount.filter(e => e.continents === action.payload)
        return{...state, countries: filter}
        
        case FILTER_BY_ALFABETIC:
        const alfaName = action.payload === 'asc' ? state.countries.sort(function (a, b) {
        if (a.name > b.name) {
        return 1;     
        }
        if (b.name > a.name) {
        return -1;
        }
        return 0;
        }) : state.countries.sort(function (a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (b.name > a.name) {
            return 1;
        }
        return 0;
        })
        return {
            ...state,
            countries: alfaName
        }

        case GET_SEARCH:  
        return{...state, countries: [action.payload]}

        case POST_ACTIVITIES:
          return{...state}

        case GET_ACTIVITIES:
          return{...state,
          activities: action.payload}

        case FILTER_BY_ACTIVITY:
            const array = []
            if(action.payload === 'All') return state;
             state.allCountries.map(el => el.activities.forEach(e => {
            if (e.name === action.payload) {
                array.push(el)
              }
            }))
            return{
              ...state,
              countries: array
            }

        case FILTER_BY_POBLACION:
              const population = action.payload === 'desc' ? state.countries.sort((a,b) => a.population - b.population) :
                  state.countries.sort((a,b) => b.population - a.population)
                  return{...state,countries: population} 

        case GET_DETAIL:
                    return{...state, detail: action.payload}
        
        default:
          return {...state}
    }
}

export default rootReducer; 


