// // const mongoose = require('mongoose');

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


import { Schema , model , connect } from "mongoose";

// 1 interface que representa documento en mongoDB
export interface IUser extends Document {
    name: string;
    age: Number;
}

// 2 crear esquema correspondiente al doc
const Mschema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
});

// 3 crear modelo creo que se hace en el archivo de rutas
export default  model<IUser>('User', Mschema);