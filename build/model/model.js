"use strict";
// const mongoose = require('mongoose');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// @ts-ignore
const dataSchema = new mongoose_1.default.Schema({
    // export default interface DataSchema extends mongoose.Model{
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
});
// mongoose.model<DataSchema>("Data", DataSchema);
module.exports = mongoose_1.default.model('Data', dataSchema);
