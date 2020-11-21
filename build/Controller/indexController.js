"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const index_1 = require("../index");
class IndexController {
    index(req, res) {
        const io = require('socket.io')(index_1.server);
        res.send("Index " + io.on('connection', (socket) => {
            console.log("io's ready");
            socket.on('Gola', (data) => {
                console.log(data + "goo");
            });
        }));
    }
}
exports.indexController = new IndexController();
