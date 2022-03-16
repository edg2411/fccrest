"use strict";
// const express = require('express');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router()
const express_1 = require("express");
const router = (0, express_1.Router)();
// module.exports = router;
// Post method
router.post('/post', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send('Post API')
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    });
    try {
        const dataToSave = yield data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        // @ts-ignore
        res.status(400).json({ message: error.message });
    }
}));
// Get all method
router.get('/getAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Model.find();
        res.json(data);
    }
    catch (error) {
        // @ts-ignore
        res.status(500).json({ message: error.message });
    }
}));
// Get by ID method
router.get('/getOne/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send('Get by ID API')
    // res.send(req.params.id)
    try {
        const data = yield Model.findById(req.params.id);
        res.json(data);
    }
    catch (error) {
        // @ts-ignore
        res.status(500).json({ message: error.message });
    }
}));
// Update by ID method
router.patch('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send('Update by ID API')
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = yield Model.findByIdAndUpdate(id, updatedData, options);
        res.send(result);
    }
    catch (error) {
        // @ts-ignore
        res.status(400).json({ message: error.message });
    }
}));
// Delete by ID method
router.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send('Delete by ID API')
    try {
        const id = req.params.id;
        const data = yield Model.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted..`);
    }
    catch (error) {
        // @ts-ignore
        res.status(400).json({ message: error.message });
    }
}));
const Model = require('../model/model');
// import dataSchema from "../model/model";
// const dataSchema = new DataSchema();
exports.default = router;
