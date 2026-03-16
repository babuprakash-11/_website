const express = require('express');
const router = express.Router();

// Mock data for messages
let messages = [];

// GET /messages - Retrieve all messages
router.get('/messages', (req, res) => {
    res.json(messages);
});

// POST /messages - Create a new message
router.post('/messages', (req, res) => {
    const newMessage = req.body;  // Assuming body-parser middleware is used
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// GET /messages/:id - Retrieve a message by id
router.get('/messages/:id', (req, res) => {
    const message = messages.find(m => m.id === parseInt(req.params.id));
    if (!message) return res.status(404).send('Message not found');
    res.json(message);
});

// DELETE /messages/:id - Delete a message by id
router.delete('/messages/:id', (req, res) => {
    messages = messages.filter(m => m.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;