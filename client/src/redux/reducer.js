import { 
    GET_ALL_COUNTRIES,
    SEARCH_COUNTRY_NAME,
    GET_ACTIVITIES,
    GET_DETAIL,
    CLEAN_DETAIL,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    SORT_BY_NAME,
    SORT_BY_POPULATION,
    POST_ACTIVITY
  } from "./actions";
  
  const initialState = {
    allCountries: [],
    backCountries: [],
    countriesDetail: {},
    activities: [],
  };
  
  const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ALL_COUNTRIES:
        return { 
          ...state, 
          allCountries: payload,
          backCountries: payload
        };
      case SEARCH_COUNTRY_NAME:
        if(payload===''){ // si borra el nombre, volvemos a mostar todos
          return {
              ...state,
              allCountries:state.backCountries
          }
        }
        return {
          ...state,
          allCountries:payload,
        }
      case GET_ACTIVITIES:
        return {
          ...state,
          activities: payload
        };
      case GET_DETAIL:
        return {
          ...state,
          countriesDetail: payload
        };
      case CLEAN_DETAIL:
        return {
          ...state,
          countriesDetail:{}
        };
      case FILTER_BY_CONTINENT:
        if (payload === "Todos") {
          return {
            ...state,
            allCountries: [...state.backCountries],
          };
        }
        return {
          ...state,
          allCountries: [...state.backCountries].filter(
            (country) => country.continent.toUpperCase() === payload.toUpperCase()
          ),
        };
      case FILTER_BY_ACTIVITY:
        const filterActivity = state.countries.filter((country) => country.activities.includes(payload));
        return {
          ...state,
          backCountries: filterActivity
        };
      case SORT_BY_NAME:
        if (payload === "Todos") {
          return {
            ...state,
            allCountries: [...state.backCountries],
          };
        }
        const { orderName } = payload
        const sortedByName = [...state.allCountries].sort((a, b) => {
          if (orderName === "ascendent") {
            return a.name.localeCompare(b.name)
          } else if (orderName === "descendent") {
            return b.name.localeCompare(a.name)
          }
          return 0
        })
        return {
          ...state,
          allCountries: sortedByName
        };
      case SORT_BY_POPULATION:
        if (payload === "Quitar") {
          return {
            ...state,
            allCountries: [...state.backCountries],
          };
        }
        const sortedPop = action.payload === "ascendent" ? 
        state.allCountries.sort(function(a,b){
          if (a.population > b.population) {
            return -1;
          } 
          if (b.population > a.population) {
            return 1;
          }
          return 0;
        }):
        state.allCountries.sort(function(a,b){
          if (a.population > b.population) {
            return 1;
          } 
          if (b.population > a.population) {
            return -1;
          }
          return 0;
        });
        return {
          ...state,
          allCountries: sortedPop,
        };
      case POST_ACTIVITY:
        return {
          ...state,
          activities: [...state.activities, payload]
        }  
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;