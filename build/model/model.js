"use strict";
// // const mongoose = require('mongoose');
Object.defineProperty(exports, "__esModule", { value: true });
// import mongoose from "mongoose";
// // const AccountSchema = new mongoose.Schema;
// // export interface ISchema extends mongoose.Document {
// //     name: string,
// //     age: number
// // }
// // export interface IModel extends mongoose.Model<ISchema>{}
// // mongoose.model<ISchema, IModel>("accounts", AccountSchema);
// // @ts-ignore
// const dataSchema = new mongoose.Schema({
// // export default interface DataSchema extends mongoose.Model{
//     name: {
//         required: true,
//         type: String
//     },
//     age: {
//         required: true,
//         type: Number
//     }   
// })
// // mongoose.model<DataSchema>("Data", DataSchema);
// const Model = mongoose.model('Data', dataSchema);
// export default Model;
// // module.exports = mongoose.model('Data', dataSchema)
const mongoose_1 = require("mongoose");
// 2 crear esquema correspondiente al doc
const Mschema = new mongoose_1.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
});
// 3 crear modelo creo que se hace en el archivo de rutas
// const Model = model<User>('User', Mschema);
exports.default = (0, mongoose_1.model)('User', Mschema);
