const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ToDoModel = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDoModel;
