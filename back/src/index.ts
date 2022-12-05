import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
const morgan = require('morgan');
import { dataBase } from './db';

const server = express();
const PORT = 3001

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'false');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use("/", routes);

dataBase.conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
  });
})