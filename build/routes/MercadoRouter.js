"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MercadoController_1 = require("../Controller/MercadoController");
class MercadoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', MercadoController_1.mercadoController.pagoMercado);
    }
}
const mercadoRouter = new MercadoRouter();
exports.default = mercadoRouter.router;
