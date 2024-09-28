const ToDoModel = require('../model/ToDoModel');

// GET all ToDo items
module.exports.getToDo = async (req, res) => {
    try {
        const todos = await ToDoModel.find();
        res.status(200).json(todos); 
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos", error });
    }
};

// Save a new ToDo item
module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;

    try {
        const newToDo = await ToDoModel.create({ text });
        console.log("Added successfully");
        res.status(201).json(newToDo);  
    } catch (error) {
        res.status(500).json({ message: "Error adding todo", error });
    }
};

// Update an existing ToDo item
module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;

    try {
        const updatedToDo = await ToDoModel.findByIdAndUpdate(_id, { text }, { new: true });
        if (!updatedToDo) {
            return res.status(404).json({ message: "ToDo not found" });
        }
        res.status(200).json(updatedToDo);
    } catch (error) {
        res.status(500).json({ message: "Error updating todo", error });
    }
};

// Delete a ToDo item
module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;

    try {
        const deletedToDo = await ToDoModel.findByIdAndDelete(_id);
        if (!deletedToDo) {
            return res.status(404).json({ message: "ToDo not found" });
        }
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting todo", error });
    }
};
