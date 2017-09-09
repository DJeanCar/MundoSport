import Country from './models/country';
import State from './models/state';
import City from './models/city';
import Brand from './models/inventary/brand';
import BranchOffice from './models/branchOffice';
import Division from './models/inventary/division';
import Model from './models/inventary/model';
import Color from './models/inventary/color';
import Size from './models/inventary/size';

export const createCountry = async (req, res) => {
	const { countryName, countryCode } = req.body;
	const country = new Country({
		name: countryName,
		code: countryCode,
	});
	await country.save();
	return res.json({
		country,
	});
};

const putStatesInEachCountry = async (countries) => {
	const newCountries = countries.map(async country => {
		country.states = await State.find({ country: country._id });
		country.cities = await City.find({ country: country._id }).populate('state');
		country.branchOffices = await BranchOffice.find({ country: country._id }).populate('country state city')
		return country;
	});
	return Promise.all(newCountries);
};

export const getCountries = async (req, res) => {
	let countries = await Country.find().sort('-createdAt').lean();
	countries = await putStatesInEachCountry(countries);
	return res.json({
		countries,
	});
};

export const deteleCountryById = async (req, res) => {
	const { countryId } = req.body;
	await Country.remove({ _id: countryId });
	return res.json({
		countryId,
	});
};

export const deleteState = async (req, res) => {
	const { stateId } = req.body;
	const state = await State.findById(stateId);
	await State.remove({ _id: stateId });
	return res.json({
		stateId,
		countryId: state.country,
	});
};

export const createState = async (req, res) => {
	const { stateName, capitalName, countryId } = req.body;
	const state = new State({
		country: countryId,
		name: stateName,
		capital: capitalName,
	});
	await state.save();
	return res.json({
		state,
	});
}

export const createCity = async (req, res) => {
	const { countryId, stateId, name, zipCode } = req.body;
	const city = new City({
		country: countryId,
		state: stateId,
		name,
		zipCode,
	});
	await city.save();
	const cityPopulated = await City.findOne({ _id: city._id }).populate('state');
	return res.json({
		city: cityPopulated,
	});
};

export const createBranchOffices = async (req, res) => {
	const { countryId, stateId, cityId, name, address } = req.body;
	const branchOffice = new BranchOffice({
		country: countryId,
		state: stateId,
		city: cityId,
		name,
		address,
	});
	await branchOffice.save()
	const branchOfficePopulated = await BranchOffice.findOne({ _id: branchOffice._id }).populate('country state city');
	return res.json({
		branchOffice: branchOfficePopulated,
	});
};

export const createDivision = async (req, res) => {
	const { name } = req.body;
	const division = new Division({
		name,
	});
	await division.save();
	return res.json({
		division,
	});
}

export const getDivisions = async (req, res) => {
	const divisions = await Division.find().sort('createdAt');
	return res.json({
		divisions,
	});
};

export const deleteDivision = async (req, res) => {
	const { divisionId } = req.body;
	await Division.remove({ _id: divisionId });
	return res.json({
		divisionId,
	});
};

export const createBrand = async (req, res) => {
	const { name } = req.body;
	const brand = new Brand({
		name,
	});
	await brand.save();
	return res.json({
		brand,
	});
};

export const getBrands = async (req, res) => {
	const brands = await Brand.find().sort('createdAt');
	return res.json({
		brands,
	});
};

export const deleteBrand = async (req, res) => {
	const { brandId } = req.body;
	await Brand.remove({ _id: brandId });
	return res.json({
		brandId,
	});
};

export const createModel = async (req, res) => {
	const { name } = req.body;
	const model = new Model({
		name,
	});
	await model.save();
	return res.json({
		model,
	});
};

export const getModels = async (req, res) => {
	const models = await Model.find().sort('createdAt');
	return res.json({
		models,
	});
};

export const deleteModel = async (req, res) => {
	const { modelId } = req.body;
	await Model.remove({ _id: modelId });
	return res.json({
		modelId,
	});
}

export const createColor = async (req, res) => {
	const { name } = req.body;
	const color = new Color({
		name,
	});
	await color.save();
	return res.json({
		color,
	});
};

export const getColors = async (req, res) => {
	const colors = await Color.find().sort('createdAt');
	return res.json({
		colors,
	});
};

export const deleteColor = async (req, res) => {
	const { colorId } = req.body;
	await Color.remove({ _id: colorId });
	return res.json({
		colorId,
	});
};

export const createSize = async (req, res) => {
	const { name } = req.body;
	const size = new Size({
		name,
	});
	await size.save();
	return res.json({
		size,
	});
};

export const getSizes = async (req, res) => {
	const sizes = await Size.find().sort('createdAt');
	return res.json({
		sizes,
	});
};

export const deleteSize = async (req, res) => {
	const { sizeId } = req.body;
	await Size.remove({ _id: sizeId });
	return res.json({
		sizeId,
	});
};
