const express = require('express');
const router = express.Router();
const MapModel = require('../models/model');

// GET /:id → Check if payment exists
router.get('/',(req,res)=>{
    return res.status(400).json({ message: "Welcome babu" });
})
router.get('/:id', async (req, res) => {
    const id = req.params.id;

    if (id) {
        const foundMap = await MapModel.findOne({ id: id });

        if (foundMap) {
            return res.json({ id: id });
        }
    }

    return res.status(404).json({ message: "bsdk payment kar phale" });
});

// POST /:id/:rollId → Add new payment
router.post('/:id/:rollId', async (req, res) => {
    const id = req.params.id;
    const rollId = req.params.rollId;

    if (!id || !rollId) {
        return res.status(400).json({ message: "ID and RollNumber are required" });
    }

    try {
        const entry = new MapModel({
            id: id,
            RollNumber: rollId
        });

        await entry.save();

        return res.status(201).json({ message: "Hogai payment", data: entry });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: "ID or RollNumber already exists" });
        }

        console.error(err);
        return res.status(500).json({ message: "Database error", error: err.message });
    }
});

module.exports = router;
