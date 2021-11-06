import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Todo from './Todo';

const Todos = ({ initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [selectedTodo, setSelectedTodo] = useState();

  const handleToggleComplete = (todoId) => {
    setTodos((curTodos) => {
      const todo = curTodos.find((todo) => todo.id === todoId);
      todo.complete = !todo.complete;
      return curTodos;
    });
  };

  const handleSelect = (todoId) => {
    setSelectedTodo(todos.find((todo) => todo.id === todoId));
  };

  return (
    <>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          handleSelect={handleSelect}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
      <h3>Selected Todo</h3>
      {selectedTodo && (
        <Todo
          todo={selectedTodo}
          handleSelect={handleSelect}
          handleToggleComplete={handleToggleComplete}
        />
      )}
    </>
  );
};

Todos.propTypes = {
  initialTodos: PropTypes.array,
};

export default Todos;
