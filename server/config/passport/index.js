import passport from 'passport';
import local from './local.js';
import User from '../../apps/user/models';

export default (app) => {
	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser(function(user, done) {
	  done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  User.findById(id, function(err, user) {
	    done(err, user);
	  });
	});

	local(app);
};
