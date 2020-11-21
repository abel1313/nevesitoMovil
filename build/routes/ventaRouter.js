"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventaController_1 = __importDefault(require("../Controller/ventaController"));
class VentaRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ventaController_1.default.venta);
    }
}
const ventaRouter = new VentaRouter();
exports.default = ventaRouter.router;
