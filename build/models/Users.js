"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const dataTypes = sequelize_1.default.DataTypes;
module.exports = (sequelize) => {
    sequelize.define("Users", {
        id: {
            type: dataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        /*  isAdmin: {
             type: dataTypes.BOOLEAN,
             
         } */
    });
};
