"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class VentaRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send("Gola");
        });
    }
}
const ventaRouter = new VentaRouter();
exports.default = ventaRouter.router;
