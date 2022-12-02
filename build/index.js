"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./db");
const server = (0, express_1.default)();
const PORT = 3001;
server.use(express_1.default.json());
server.use(body_parser_1.default.json());
server.use("/", routes_1.default);
db_1.dataBase.conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log(`listening at ${PORT}`);
    });
});
