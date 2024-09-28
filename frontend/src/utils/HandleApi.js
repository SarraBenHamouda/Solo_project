import axios from 'axios';

const baseUrl = "http://localhost:5000/api/todos";

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('Fetched todos:', data);
            setToDo(data);
        })
        .catch((err) => console.log(err));
};

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then(({ data }) => {
            console.log('Added todo:', data);
            setToDo(prevToDo => [...prevToDo, data]);
            setText(""); // Clear input
        })
        .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .put(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("");
            setIsUpdating(false);
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

const deleteToDo = (toDoId, setToDo) => {
    axios
        .delete(`${baseUrl}/delete`, { data: { _id: toDoId } }) // Note the use of { data: { _id: toDoId } }
        .then((response) => {
            console.log('Delete response:', response);
            getAllToDo(setToDo); // Refresh the list after deletion
        })
        .catch((err) => console.log('Error deleting todo:', err));
};






export { getAllToDo, addToDo, updateToDo, deleteToDo };
