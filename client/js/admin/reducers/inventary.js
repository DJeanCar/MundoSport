import {

	CREATE_DIVISION_PENDING,
	CREATE_DIVISION_FULFILLED,
	CREATE_DIVISION_REJECTED,

	GET_DIVISIONS_PENDING,
	GET_DIVISIONS_FULFILLED,
	GET_DIVISIONS_REJECTED,

	DELETE_DIVISION_PENDING,
	DELETE_DIVISION_FULFILLED,
	DELETE_DIVISION_REJECTED,

	CREATE_BRAND_PENDING,
	CREATE_BRAND_FULFILLED,
	CREATE_BRAND_REJECTED,

	GET_BRAND_PENDING,
	GET_BRAND_FULFILLED,
	GET_BRAND_REJECTED,

	DELETE_BRAND_PENDING,
	DELETE_BRAND_FULFILLED,
	DELETE_BRAND_REJECTED,

  CREATE_MODEL_PENDING,
  CREATE_MODEL_FULFILLED,
  CREATE_MODEL_REJECTED,

  GET_MODEL_PENDING,
  GET_MODEL_FULFILLED,
  GET_MODEL_REJECTED,

  DELETE_MODEL_PENDING,
  DELETE_MODEL_FULFILLED,
  DELETE_MODEL_REJECTED,

  CREATE_COLOR_PENDING,
  CREATE_COLOR_FULFILLED,
  CREATE_COLOR_REJECTED,

  GET_COLOR_PENDING,
  GET_COLOR_FULFILLED,
  GET_COLOR_REJECTED,

  DELETE_COLOR_PENDING,
  DELETE_COLOR_FULFILLED,
  DELETE_COLOR_REJECTED,

  CREATE_SIZE_PENDING,
  CREATE_SIZE_FULFILLED,
  CREATE_SIZE_REJECTED,

  GET_SIZE_PENDING,
  GET_SIZE_FULFILLED,
  GET_SIZE_REJECTED,

  DELETE_SIZE_PENDING,
  DELETE_SIZE_FULFILLED,
  DELETE_SIZE_REJECTED,

} from '../actions/inventary';

const initialState = {
  
  divisionList: [],
  brandList: [],
  modelList: [],
  colorList: [],
  sizeList: [],

};

const parameters = (state = initialState, action) => {
  switch (action.type) {

    case DELETE_SIZE_FULFILLED: {
      const { sizeId } = action.payload.body;
      return {
        ...state,
        sizeList: state.sizeList.filter(size => size._id !== sizeId),
      };
      break;
    }

    case GET_SIZE_FULFILLED:
      return {
        ...state,
        sizeList: action.payload.body.sizes,
      };
      break;

    case CREATE_SIZE_FULFILLED: {
      const { size } = action.payload.body;
      return {
        ...state,
        sizeList: state.sizeList.concat(size),
      };
      break;
    }

    case DELETE_COLOR_FULFILLED: {
      const { colorId } = action.payload.body;
      return {
        ...state,
        colorList: state.colorList.filter(color => color._id !== colorId),
      };
      break;
    }

    case GET_COLOR_FULFILLED:
      return {
        ...state,
        colorList: action.payload.body.colors,
      };
      break;

    case CREATE_COLOR_FULFILLED: {
      const { color } = action.payload.body;
      return {
        ...state,
        colorList: state.colorList.concat(color),
      };
      break;
    }

    case DELETE_MODEL_FULFILLED: {
      const { modelId } = action.payload.body;
      return {
        ...state,
        modelList: state.modelList.filter(model => model._id !== modelId),
      };
      break;
    }

    case GET_MODEL_FULFILLED:
      return {
        ...state,
        modelList: action.payload.body.models,
      };
      break;

    case CREATE_MODEL_FULFILLED: {
      const { model } = action.payload.body;
      return {
        ...state,
        modelList: state.modelList.concat(model),
      };
      break;
    }

  	case DELETE_BRAND_FULFILLED: {
  		const { brandId } = action.payload.body;
      return {
        ...state,
        brandList: state.brandList.filter(brand => brand._id !== brandId),
      };
  		break;
  	}

  	case GET_BRAND_FULFILLED:
  		return {
  			...state,
  			brandList: action.payload.body.brands,
  		};
  		break;

  	case CREATE_BRAND_FULFILLED: {
  		const { brand } = action.payload.body;
  		return {
  			...state,
  			brandList: state.brandList.concat(brand),
  		};
  		break;
  	}

  	case DELETE_DIVISION_FULFILLED: {
  		const { divisionId } = action.payload.body;
      return {
        ...state,
        divisionList: state.divisionList.filter(division => division._id !== divisionId),
      };
  		break;
  	}

  	case GET_DIVISIONS_FULFILLED: 
  		return {
  			...state,
  			divisionList: action.payload.body.divisions,
  		};
  		break;

    case CREATE_DIVISION_FULFILLED: {
      const { division } = action.payload.body;
      return {
        ...state,
        divisionList: state.divisionList.concat(division),
      };
      break;
    }

    default:
      return state;
  }
};

export default parameters;
