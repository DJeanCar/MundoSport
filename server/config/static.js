import express from 'express';

export default (app) => {

  if (process.env.NODE_ENV === 'prod') {
    app.use(express.static(__dirname + '/../../client'));
    app.locals.STATIC_URL = 'https://s3-us-west-2.amazonaws.com/tarefastatic/static/';
  } else {
    app.locals.STATIC_URL = '/';
    app.use(express.static(__dirname + '/../../client'));
  }
};
