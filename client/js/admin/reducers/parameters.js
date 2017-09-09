import {

  CREATE_COUNTRY_PENDING,
  CREATE_COUNTRY_FULFILLED,
  CREATE_COUNTRY_REJECTED,

  GET_COUNTRIES_PENDING,
  GET_COUNTRIES_FULFILLED,
  GET_COUNTRIES_REJECTED,

  DELETE_COUNTRY_PENDING,
  DELETE_COUNTRY_FULFILLED,
  DELETE_COUNTRY_REJECTED,

  CREATE_STATE_PENDING,
  CREATE_STATE_FULFILLED,
  CREATE_STATE_REJECTED,

  CREATE_CITY_PENDING,
  CREATE_CITY_FULFILLED,
  CREATE_CITY_REJECTED,

  CREATE_BRANCH_OFFICES_PENDING,
  CREATE_BRANCH_OFFICES_FULFILLED,
  CREATE_BRANCH_OFFICES_REJECTED,

  DELETE_STATE_PENDING,
  DELETE_STATE_FULFILLED,
  DELETE_STATE_REJECTED,

} from '../actions/parameters';

const initialState = {
  
  countryList: [],

};

const parameters = (state = initialState, action) => {
  switch (action.type) {

    case DELETE_STATE_FULFILLED: {
      const { stateId, countryId } = action.payload.body;
      const newCountryList = state.countryList.map(country => {
        if (country._id === countryId) {
          country.states = country.states.filter(state => state._id !== stateId);
        }
        return country;
      });
      return {
        ...state,
        countryList: newCountryList,
      };
      break;
    }

    case CREATE_BRANCH_OFFICES_FULFILLED: {
      const { branchOffice } = action.payload.body;
      const newCountryList = state.countryList.map(country => {
        if (country._id === branchOffice.country._id) {
          if (!country.branchOffices) {
            country.branchOffices = [];
          }
          country.branchOffices.push(branchOffice);
        }
        return country;
      });
      return {
        ...state,
        countryList: newCountryList,
      };
      break;
    }

    case CREATE_CITY_FULFILLED: {
      const { city } = action.payload.body;
      const newCountryList = state.countryList.map(country => {
        if (country._id === city.country) {
          if (!country.cities) {
            country.cities = [];
          }
          country.cities.push(city);
        }
        return country;
      });
      return {
        ...state,
        countryList: newCountryList,
      };
      break;
    }

    case CREATE_STATE_FULFILLED: {
      const countryState = action.payload.body.state;
      const newContryList = state.countryList.map(country => {
        if (country._id === countryState.country) {
          if (!country.states) {
            country.states = [];
          }
          country.states.push(countryState);
        }
        return country;
      });
      return {
        ...state,
        countryList: newContryList,
      };
      break;
    }

    case DELETE_COUNTRY_FULFILLED: {
      const { countryId } = action.payload.body;
      return {
        ...state,
        countryList: state.countryList.filter(country => country._id !== countryId),
      };
      break;
    }

    case GET_COUNTRIES_FULFILLED: 
      return {
        ...state,
        countryList: action.payload.body.countries,
      }

    case CREATE_COUNTRY_FULFILLED: {
      const { country } = action.payload.body;
      country.states = [];
      return {
        ...state,
        countryList: [country].concat(state.countryList),
      };
      break;
    }

    default:
      return state;
  }
};

export default parameters;