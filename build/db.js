"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBase = void 0;
require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const basename = path_1.default.basename(__filename);
const modelDefiners = [];
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, } = process.env;
let sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, { logging: false, native: false });
fs_1.default.readdirSync(path_1.default.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
    modelDefiners.push(require(path_1.default.join(__dirname, '/models', file)));
});
modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
/* console.log("estos deberían ser los modelos", sequelize.models) */
exports.dataBase = {
    models: sequelize.models,
    conn: sequelize,
};
