// const mongoose = require('mongoose');

import mongoose from "mongoose";

// @ts-ignore
const dataSchema = new mongoose.Schema({
// export default interface DataSchema extends mongoose.Model{
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }   
})

// mongoose.model<DataSchema>("Data", DataSchema);

module.exports = mongoose.model('Data', dataSchema)