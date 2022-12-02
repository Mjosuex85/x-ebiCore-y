require('dotenv').config();
const { Sequelize } = require('sequelize');
import fs from 'fs';
import path from 'path';
const basename = path.basename(__filename);
const modelDefiners: string[] = [];

const {
    DB_USER, 
    DB_PASSWORD, 
    DB_HOST, 
    DB_NAME, 
  } = process.env;

let sequelize:any =
  new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
      );
      


fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file:string) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file:string) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach((model:any)=> model(sequelize)); 

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

/* console.log("estos deberían ser los modelos", sequelize.models) */


export const dataBase = {
 models: sequelize.models, 
  conn: sequelize,  
};
