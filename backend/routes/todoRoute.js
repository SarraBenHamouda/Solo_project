const { Router } = require('express');
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../Controllers/todoController');

const router = Router();

// GET all todos
router.get('/', getToDo); 

// POST to save a new todo
router.post('/save', saveToDo); 

// PUT to update an existing todo
router.put('/update', updateToDo); // Add this line for updating todos

// DELETE a todo
router.delete('/delete', deleteToDo); // Add this line for deleting todos

module.exports = router;
