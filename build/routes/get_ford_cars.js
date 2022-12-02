"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/* import axios from 'axios'; */
const router = express_1.default.Router();
/* import { apiCars } from '../services/getCars' */
router.get("/get_ford_cars", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /*  axios.get("https://server.cocoche.com.ar/car_listing_presentation?list_length=100")
     .then((respose) => {
         console.log(respose, "........")
     }) */
    res.send("FUNCIONA ESTE GET DE CARS");
}));
exports.default = router;
