import * as mainController from '../../apps/main/controllers.js'
import * as adminController from '../../apps/admin/controllers.js';
import * as apiController from '../../apps/api/controllers.js';

// Controller
export default (app) => {

	app.get('/api/country', apiController.getCountries);
	app.delete('/api/country', apiController.deteleCountryById);
	app.post('/api/country/create', apiController.createCountry);
	
	app.post('/api/state', apiController.createState);
	app.delete('/api/state', apiController.deleteState);

	app.post('/api/city', apiController.createCity);
	app.post('/api/branch-offices', apiController.createBranchOffices);

	app.get('/api/division', apiController.getDivisions);
	app.post('/api/division', apiController.createDivision);
	app.delete('/api/division', apiController.deleteDivision);
	
	app.get('/api/brand', apiController.getBrands);
	app.post('/api/brand', apiController.createBrand);
	app.delete('/api/brand', apiController.deleteBrand);

	app.post('/api/model', apiController.createModel);
	app.get('/api/model', apiController.getModels);
	app.delete('/api/model', apiController.deleteModel);

	app.post('/api/color', apiController.createColor);
	app.get('/api/color', apiController.getColors);
	app.delete('/api/color', apiController.deleteColor);

	app.post('/api/size', apiController.createSize);
	app.get('/api/size', apiController.getSizes);
	app.delete('/api/size', apiController.deleteSize);


	app.get('/admin/user/create', adminController.loadCreateUserForm);
	app.post('/admin/user/create', adminController.createUser);

	app.get('/', mainController.main);
	app.get('/admin', adminController.admin);
};
