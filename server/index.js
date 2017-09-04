import 'babel-polyfill';
import express from 'express';
import session from './config/session';
import template from './config/template';
import staticFiles from './config/static';
import routes from './config/routes';
import passport from './config/passport';

const app = express();

session(app);
passport(app);
template(app);
staticFiles(app);
routes(app);

app.listen(3000);
