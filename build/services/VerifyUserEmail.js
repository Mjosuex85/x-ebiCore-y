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
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRegistredEmail = void 0;
const db_1 = require("../db");
/**
 * this function verify if the email is already registred,
 * return boolean
 */
const verifyRegistredEmail = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    let userInfo;
    yield db_1.dataBase.models.Users.findOne({ where: { email: userEmail } })
        .then((res) => {
        userInfo = res;
    });
    if (userInfo !== null) {
        return true;
    }
    else
        return false;
});
exports.verifyRegistredEmail = verifyRegistredEmail;
