"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexion_1 = __importDefault(require("../../../ConexionMysql/conexion"));
class VentaController {
    venta(req, res) {
        res.send("Venta Controller ");
        conexion_1.default.query("describe usuario");
    }
}
const ventaController = new VentaController();
exports.default = ventaController;
