import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Todo from './Todo';

const Todos = ({ initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [selectedTodo, setSelectedTodo] = useState();

  const handleToggleComplete = (todoId) => {
    setTodos((curTodos) => {
      return curTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    });
  };

  const handleSelect = (todoId) => {
    setSelectedTodo(todos.find((todo) => todo.id === todoId));
  };

  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
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
