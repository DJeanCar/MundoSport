import * as mainController from '../../apps/main/controllers.js'
import * as adminController from '../../apps/admin/controllers.js';
import * as apiController from '../../apps/api/controllers.js';

// Controller
export default (app) => {

	app.get('/api/country', apiController.getCountries);
	app.delete('/api/country', apiController.deteleCountryById);
	app.post('/api/country/create', apiController.createCountry);
	
	app.post('/api/state', apiController.createState);
	app.post('/api/city', apiController.createCity);
	app.post('/api/branch-offices', apiController.createBranchOffices);


	app.get('/admin/user/create', adminController.loadCreateUserForm);
	app.post('/admin/user/create', adminController.createUser);

	app.get('/', mainController.main);
	app.get('/admin', adminController.admin);
};
