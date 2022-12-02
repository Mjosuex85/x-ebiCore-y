"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_ford_cars_1 = __importDefault(require("./get_ford_cars"));
const create_user_1 = __importDefault(require("./create_user"));
const router = express_1.default.Router();
router.use("/", get_ford_cars_1.default);
router.use("/", create_user_1.default);
exports.default = router;
