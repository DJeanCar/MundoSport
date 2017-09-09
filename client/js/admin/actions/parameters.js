import request from 'superagent';

export const CREATE_COUNTRY_PENDING = 'CREATE_COUNTRY_PENDING';
export const CREATE_COUNTRY_FULFILLED = 'CREATE_COUNTRY_FULFILLED';
export const CREATE_COUNTRY_REJECTED = 'CREATE_COUNTRY_REJECTED';

export const GET_COUNTRIES_PENDING = 'GET_COUNTRIES_PENDING';
export const GET_COUNTRIES_FULFILLED = 'GET_COUNTRIES_FULFILLED';
export const GET_COUNTRIES_REJECTED = 'GET_COUNTRIES_REJECTED';

export const DELETE_COUNTRY_PENDING = 'DELETE_COUNTRY_PENDING';
export const DELETE_COUNTRY_FULFILLED = 'DELETE_COUNTRY_FULFILLED';
export const DELETE_COUNTRY_REJECTED = 'DELETE_COUNTRY_REJECTED';

export const CREATE_STATE_PENDING = 'CREATE_STATE_PENDING';
export const CREATE_STATE_FULFILLED = 'CREATE_STATE_FULFILLED';
export const CREATE_STATE_REJECTED = 'CREATE_STATE_REJECTED';

export const CREATE_CITY_PENDING = 'CREATE_CITY_PENDING';
export const CREATE_CITY_FULFILLED = 'CREATE_CITY_FULFILLED';
export const CREATE_CITY_REJECTED = 'CREATE_CITY_REJECTED';

export const CREATE_BRANCH_OFFICES_PENDING = 'CREATE_BRANCH_OFFICES_PENDING';
export const CREATE_BRANCH_OFFICES_FULFILLED = 'CREATE_BRANCH_OFFICES_FULFILLED';
export const CREATE_BRANCH_OFFICES_REJECTED = 'CREATE_BRANCH_OFFICES_REJECTED';

export const DELETE_STATE_PENDING = 'DELETE_STATE_PENDING';
export const DELETE_STATE_FULFILLED = 'DELETE_STATE_FULFILLED';
export const DELETE_STATE_REJECTED = 'DELETE_STATE_REJECTED';

const createCountry = (country) => {
  return {
    type: 'CREATE_COUNTRY',
    payload: request.post('/api/country/create').send(country),
  };
};

const getAllCountries = () => {
	return {
		type: 'GET_COUNTRIES',
		payload: request.get('/api/country')
	}
};

const deleteCountry = (countryId) => {
	return {
		type: 'DELETE_COUNTRY',
		payload: request.delete('/api/country').send({ countryId: countryId }),
	};
}

const createState = (state) => {
	return {
		type: 'CREATE_STATE',
		payload: request.post('/api/state').send(state),
	};
};

const createCity = (city) => {
	return {
		type: 'CREATE_CITY',
		payload: request.post('/api/city').send(city),
	};
};

const createBranchOffices = (branchOffices) => {
	return {
		type: 'CREATE_BRANCH_OFFICES',
		payload: request.post('/api/branch-offices').send(branchOffices),
	};
};

const deleteState = (stateId) => {
	return {
		type: 'DELETE_STATE',
		payload: request.delete('/api/state').send({ stateId }),
	}
}

export {
  createCountry,
  getAllCountries,
  createState,
  createCity,
  createBranchOffices,
  deleteCountry,
  deleteState,
};