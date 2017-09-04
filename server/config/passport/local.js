import passport from 'passport';
import passportLocal from 'passport-local';
import User from '../../apps/user/models';
import bcrypt from 'bcrypt';

const LocalStrategy = passportLocal.Strategy;

export default (app) => {

	passport.use(new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			// passReqToCallBack: true,
		},
		async (email, password, done) => {
			const user = await User.findOne({ email: email });
			if (!user) {
				// req.flash('error', true)
				return done(null, false, { message: 'The user do not exist' })
			}

			const isValidPassword = await bcrypt.compare(password, user.password);

			if (!isValidPassword) {
				// req.flash('error', true);
				return done(null, false, { message: 'Invalid email or password.' });
			}
			return done(null, user);
		}
	));

	app.post('/login', passport.authenticate('local', {
		successRedirect: '/admin',
		failureRedirect: '/other',
		failureFlash: true,
	}));

};
