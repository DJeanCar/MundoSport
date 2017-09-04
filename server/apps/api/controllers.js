import Country from './models/country';
import State from './models/state';
import City from './models/city';
import BranchOffice from './models/branchOffice';

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
