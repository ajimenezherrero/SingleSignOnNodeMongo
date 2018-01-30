const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { routes } = require('./routes');
const { security } = require('./middlewares');

const logger = require('simple-logger-cornerjob').getLogger('Server');

const app = express();

app.use(bodyParser.json());

Object.keys(routes)
  .forEach(key => {
    app.use(`/${key}`, security);
    app.use(`/${key}`, routes[key]);
  });

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/ping', (req, res) => {
  res.send('ping');
});

app.use(morgan('combined', {
  stream: logger.stream
}));

const start = () => {
  const { PORT = 8080 } = process.env;

  app.listen(PORT, () => {
    logger.info(`Running on ${PORT}`);
  });
};

exports.app = app;
exports.start = start;
