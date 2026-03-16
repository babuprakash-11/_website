const express = require('express');
const router = express.Router();

// GET /users - Retrieve all users
router.get('/', (req, res) => {
    res.send('Retrieve all users');
});

// POST /users - Create a new user
router.post('/', (req, res) => {
    res.send('Create a new user');
});

// GET /users/:id - Retrieve a user by ID
router.get('/:id', (req, res) => {
    res.send(`Retrieve user with ID: ${req.params.id}`);
});

// PUT /users/:id - Update a user by ID
router.put('/:id', (req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
});

// DELETE /users/:id - Delete a user by ID
router.delete('/:id', (req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
});

module.exports = router;