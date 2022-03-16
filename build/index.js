"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
// require('dotenv').config();
dotenv_1.default.config();
// const express = require('express');
// const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
// @ts-ignore
mongoose_1.default.connect(mongoString);
const database = mongoose_1.default.connection;
database.on('error', (error) => {
    console.log(error);
});
database.once('connected', () => {
    console.log('Database Connected');
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});
// const routes = require('./routes/routes');
const routes_1 = __importDefault(require("./routes/routes"));
app.use('/api', routes_1.default);
