import nunjucks from 'nunjucks';

export default (app) => {
	nunjucks.configure('views', {
    autoescape: true,
    noCache: true,
    express: app
	});
}
