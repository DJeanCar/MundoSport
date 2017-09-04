import bcrypt from 'bcrypt';
import User from '../user/models';

export const admin = (req, res) => {
	const err = req.flash('error');
	if (!!req.user) {
		return res.render('dashboard.html');
	}
	return res.render('admin.html');
};


export const loadCreateUserForm = (req, res) => {
	return res.render('create_user.html');
};

const createTokenFromPassword = async (password) =>	await bcrypt.hash(password, 10);

export const createUser = async (req, res) => {
	const { email, password } = req.body;
	const hash = await createTokenFromPassword(password);
	const user = new User({
		email,
		password: hash,
	});
	await user.save()
	return res.redirect('/admin');
};
