"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mercadoController = void 0;
const mercadoPago_1 = __importDefault(require("../routes/mercadoPago"));
class MercadoController {
    pagoMercado(req, res) {
        res.send(mercadoPago_1.default);
    }
}
exports.mercadoController = new MercadoController();
