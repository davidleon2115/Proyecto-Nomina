"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //@types/express and definetelytyped
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get('/ping', (_, res) => {
    console.log('oli');
    res.send('pong');
});
app.get('/oli', (_, res) => {
    console.log('oli');
    res.send('<h1>Si wenas</h1>');
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
