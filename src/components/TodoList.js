import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default TodoList;
