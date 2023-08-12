import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

function TodoItem({ todo, setTodos }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5001/todo/${id}`);
    setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
  };

  function formatDescription(description) {
    return { __html: description.replace(/\n/g, '<br />') };
  }

  return (
    <div className="todo-item">
      <h2>{todo.title}</h2>
      <p onClick={() => setModalIsOpen(true)} className="description-preview">
        {todo.description.substring(0, 50)}...
      </p>
      <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>Delete</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>{todo.title}</h2>
        <div dangerouslySetInnerHTML={formatDescription(todo.description)} />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default TodoItem;
