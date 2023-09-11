import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const SEARCH_COUNTRY_NAME = "SEARCH_COUNTRY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES"
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_POPULATION = "SORT_BY_POPULATION";
export const POST_ACTIVITY = "POST_ACTIVITY";


export const getAllCountries = () => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get("http://localhost:3001/countries");
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data,
            });
        };
    } catch (error) {
        alert(error.message)
    };
};

export const getCountryByName = (name) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get(`http://localhost:3001/countries?name=${name}`);
            return dispatch({
                type: SEARCH_COUNTRY_NAME,
                payload: data,
            });
        };
    } catch (error) {
        alert(error.message)
    };
};

export const getActivities = () => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get("http://localhost:3001/activities");
            return dispatch({
                type: GET_ACTIVITIES,
                payload: data,
            });
        };
    } catch (error) {
        alert(error.message)
    };
};

export const getDetail = (id) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: data,
            });
        };
    } catch (error) {
        alert(error.message)
    };
};

export const cleanDetail = () => {
    try {
        return {
            type: CLEAN_DETAIL,
        };
    } catch (error) {
        alert(error.message)
    };
};

export const filterByContinent = (filCont) => {
    return {
      type: FILTER_BY_CONTINENT,
      payload: filCont
    };
};

export const filterByActivity = (filAct) => {
    return {
      type: FILTER_BY_ACTIVITY,
      payload: filAct
    };
};

export const sortByName = (orderName) => {
    return {
      type: SORT_BY_NAME,
      payload: { orderName }
    };
};

export const sortByPopulation = (orderPopulation) => {
    return {
      type: SORT_BY_POPULATION,
      payload: { orderPopulation }
    };
};

export const postActivity = (activity) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.post("http://localhost:3001/activities", activity);
            return dispatch({
                type: POST_ACTIVITY,
                payload: data,
            });
        };
    } catch (error) {
        alert(error.message)
    };
};