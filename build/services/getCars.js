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
exports.apiCars = void 0;
const axios_1 = __importDefault(require("axios"));
const apiCars = () => __awaiter(void 0, void 0, void 0, function* () {
    const request = yield axios_1.default.get('https://server.cocoche.com.ar/car_listing_presentation?list_length=100');
    const cars = request;
    console.log(cars);
    try {
        /* cars.map((e: any) => {
            return {
                id: e.cca3,
            }
        }) */
    }
    catch (error) {
        console.log(error);
    }
    ;
});
exports.apiCars = apiCars;
