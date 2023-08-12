import React, { useState } from 'react';
import axios from 'axios';

function AddTodo({ setTodos }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = async () => {
    const newTodo = { title, description };
    const response = await axios.post('http://localhost:5001/todo', newTodo);
    setTodos(prevTodos => [...prevTodos, response.data]);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="add-btn" onClick={addTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
