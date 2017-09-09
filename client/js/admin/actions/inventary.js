import request from 'superagent';

export const CREATE_DIVISION_PENDING = 'CREATE_DIVISION_PENDING';
export const CREATE_DIVISION_FULFILLED = 'CREATE_DIVISION_FULFILLED';
export const CREATE_DIVISION_REJECTED = 'CREATE_DIVISION_REJECTED';

export const GET_DIVISIONS_PENDING = 'GET_DIVISIONS_PENDING';
export const GET_DIVISIONS_FULFILLED = 'GET_DIVISIONS_FULFILLED';
export const GET_DIVISIONS_REJECTED = 'GET_DIVISIONS_REJECTED';

export const DELETE_DIVISION_PENDING = 'DELETE_DIVISION_PENDING';
export const DELETE_DIVISION_FULFILLED = 'DELETE_DIVISION_FULFILLED';
export const DELETE_DIVISION_REJECTED = 'DELETE_DIVISION_REJECTED';

export const CREATE_BRAND_PENDING = 'CREATE_BRAND_PENDING';
export const CREATE_BRAND_FULFILLED = 'CREATE_BRAND_FULFILLED';
export const CREATE_BRAND_REJECTED = 'CREATE_BRAND_REJECTED';

export const GET_BRAND_PENDING = 'GET_BRAND_PENDING';
export const GET_BRAND_FULFILLED = 'GET_BRAND_FULFILLED';
export const GET_BRAND_REJECTED = 'GET_BRAND_REJECTED';

export const DELETE_BRAND_PENDING = 'DELETE_BRAND_PENDING';
export const DELETE_BRAND_FULFILLED = 'DELETE_BRAND_FULFILLED';
export const DELETE_BRAND_REJECTED = 'DELETE_BRAND_REJECTED';

export const CREATE_MODEL_PENDING = 'CREATE_MODEL_PENDING';
export const CREATE_MODEL_FULFILLED = 'CREATE_MODEL_FULFILLED';
export const CREATE_MODEL_REJECTED = 'CREATE_MODEL_REJECTED';

export const GET_MODEL_PENDING = 'GET_MODEL_PENDING';
export const GET_MODEL_FULFILLED = 'GET_MODEL_FULFILLED';
export const GET_MODEL_REJECTED = 'GET_MODEL_REJECTED';

export const DELETE_MODEL_PENDING = 'DELETE_MODEL_PENDING';
export const DELETE_MODEL_FULFILLED = 'DELETE_MODEL_FULFILLED';
export const DELETE_MODEL_REJECTED = 'DELETE_MODEL_REJECTED';

export const CREATE_COLOR_PENDING = 'CREATE_COLOR_PENDING';
export const CREATE_COLOR_FULFILLED = 'CREATE_COLOR_FULFILLED';
export const CREATE_COLOR_REJECTED = 'CREATE_COLOR_REJECTED';

export const GET_COLOR_PENDING = 'GET_COLOR_PENDING';
export const GET_COLOR_FULFILLED = 'GET_COLOR_FULFILLED';
export const GET_COLOR_REJECTED = 'GET_COLOR_REJECTED';

export const DELETE_COLOR_PENDING = 'DELETE_COLOR_PENDING';
export const DELETE_COLOR_FULFILLED = 'DELETE_COLOR_FULFILLED';
export const DELETE_COLOR_REJECTED = 'DELETE_COLOR_REJECTED';

export const CREATE_SIZE_PENDING = 'CREATE_SIZE_PENDING';
export const CREATE_SIZE_FULFILLED = 'CREATE_SIZE_FULFILLED';
export const CREATE_SIZE_REJECTED = 'CREATE_SIZE_REJECTED';

export const GET_SIZE_PENDING = 'GET_SIZE_PENDING';
export const GET_SIZE_FULFILLED = 'GET_SIZE_FULFILLED';
export const GET_SIZE_REJECTED = 'GET_SIZE_REJECTED';

export const DELETE_SIZE_PENDING = 'DELETE_SIZE_PENDING';
export const DELETE_SIZE_FULFILLED = 'DELETE_SIZE_FULFILLED';
export const DELETE_SIZE_REJECTED = 'DELETE_SIZE_REJECTED';

const createDivision = (division) => {
  return {
    type: 'CREATE_DIVISION',
    payload: request.post('/api/division').send(division),
  };
};

const getDivisions = () => {
	return {
		type: 'GET_DIVISIONS',
		payload: request.get('/api/division'),
	};
};

const deleteDivision = (divisionId) => {
	return {
		type: 'DELETE_DIVISION',
		payload: request.delete('/api/division').send({ divisionId: divisionId }),
	};
};

const createBrand = (brand) => {
	return {
		type: 'CREATE_BRAND',
		payload: request.post('/api/brand').send(brand),
	}
};

const getBrands = () => {
	return {
		type: 'GET_BRAND',
		payload: request.get('/api/brand'),
	};
};

const deleteBrand = (brandId) => {
	return {
		type: 'DELETE_BRAND',
		payload: request.delete('/api/brand').send({ brandId: brandId }),
	}
};

const createModel = (model) => {
	return {
		type: 'CREATE_MODEL',
		payload: request.post('/api/model').send(model),
	};
};

const getModels = () => {
	return {
		type: 'GET_MODEL',
		payload: request.get('/api/model'),
	};
};

const deleteModel = (modelId) => {
	return {
		type: 'DELETE_MODEL',
		payload: request.delete('/api/model').send({ modelId: modelId }),
	}
};

const createColor = (color) => {
	return {
		type: 'CREATE_COLOR',
		payload: request.post('/api/color').send(color),
	};
};

const getColors = () => {
	return {
		type: 'GET_COLOR',
		payload: request.get('/api/color'),
	};
};

const deleteColor = (colorId) => {
	return {
		type: 'DELETE_COLOR',
		payload: request.delete('/api/color').send({ colorId: colorId }),
	}
};

const createSize = (size) => {
	return {
		type: 'CREATE_SIZE',
		payload: request.post('/api/size').send(size),
	};
};

const getSizes = () => {
	return {
		type: 'GET_SIZE',
		payload: request.get('/api/size'),
	};
};

const deleteSize = (sizeId) => {
	return {
		type: 'DELETE_SIZE',
		payload: request.delete('/api/size').send({ sizeId: sizeId }),
	};
};

export {
	createDivision,
	createBrand,
	createModel,
	createColor,
	createSize,
	getDivisions,
	getBrands,
	getModels,
	getColors,
	getSizes,
	deleteBrand,
	deleteDivision,
	deleteModel,
	deleteColor,
	deleteSize,
};
