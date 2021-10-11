import React from 'react';
// import UserList from './UserList';
// import TodoList from './TodoList';
import './index.css';
import SearchUsers from './UserList';
import SearchTodos from './TodoList';

const HighOrderComponents = () => {
  return (
    <div>
      <h2>Higher Order Component</h2>
      <div className="section">
        <div>
          {/* <UserList /> */}
          <SearchUsers />
        </div>
        <div>
          <SearchTodos />
        </div>
      </div>
    </div>
  );
};

export default HighOrderComponents;
