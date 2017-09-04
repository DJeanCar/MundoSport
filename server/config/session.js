import session from 'express-session';
import Redis from 'connect-redis';
import bodyParser from 'body-parser';
import flash from 'connect-flash';

const RedisStore = Redis(session);

export default (app) => {
	app.use(flash());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(session({
		store: new RedisStore({
			host : "127.0.0.1",
			port : 6379,
			db : 0,
		}),
	  secret: 'MundoSport',
	  resave: false,
	  saveUninitialized: true,
	  cookie: { secure: false } // TRUE with HTTPS
	}));
};
