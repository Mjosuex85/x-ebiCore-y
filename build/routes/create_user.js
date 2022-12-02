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
const router = express_1.default.Router();
const VerifyUserEmail_1 = require("../services/VerifyUserEmail");
const db_1 = require("../db");
router.post("/create_user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, phone, email } = req.body;
    try {
        let isRegistered;
        yield (0, VerifyUserEmail_1.verifyRegistredEmail)(email)
            .then((res) => isRegistered = res);
        isRegistered ?
            res.status(500).send("The User is already registered")
            : yield db_1.dataBase.models.Users.create({
                name,
                phone,
                email
            })
                .then((source) => {
                const user = {
                    id: source.id,
                    createdAt: source.createdAt // TODO traer fecha formato: dd-mm-AAAA
                };
                res.status(200).send(user);
            });
    }
    catch (error) {
        console.log(error);
    }
    ;
}));
exports.default = router;
