
// const express = require('express');

// const router = express.Router()



import express, { Router } from "express";

const router = Router();

// module.exports = router;

// Post method
router.post('/post', async (req,res) => {
    // res.send('Post API')
    const data = new Model ({
        name: req.body.name,
        age: req.body.age
    })

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        // @ts-ignore
        res.status(400).json({message: error.message})
    }
})

// Get all method
router.get('/getAll', async (req,res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        // @ts-ignore
        res.status(500).json({message: error.message})
    }
})

// Get by ID method
router.get('/getOne/:id', async (req,res) => {
    // res.send('Get by ID API')
    // res.send(req.params.id)
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        // @ts-ignore
        res.status(500).json({message: error.message})
    }
})

// Update by ID method
router.patch('/update/:id', async (req,res) => {
    // res.send('Update by ID API')
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        // @ts-ignore
        res.status(400).json({ message: error.message })
    }
})

// Delete by ID method
router.delete('/delete/:id', async (req,res) => {
    // res.send('Delete by ID API')
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        // @ts-ignore
        res.status(400).json({ message: error.message })
    }
})

const Model = require('../model/model')

// import dataSchema from "../model/model";

// const dataSchema = new DataSchema();

export default router;

