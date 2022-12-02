import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import { dataBase } from './db';

const server = express();
const PORT = 3001

server.use(express.json());
server.use(bodyParser.json());
server.use("/", routes);

dataBase.conn.sync({force: false}).then(() => {
    server.listen(PORT, () => {
        console.log(`listening at ${PORT}`)
    });
})