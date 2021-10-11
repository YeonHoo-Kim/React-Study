import React, { useEffect, useState } from 'react';
import HOC from './HOC';

const TodoList = ({ data }) => {
  // const [todos, setTodos] = useState([]);
  // const [term, setTerm] = useState('');

  // const fetchTodos = async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   const json = await res.json();
  //   setTodos(json);
  //   console.log(todos);
  // };

  let renderTodos = data.slice(0, 10).map((todo) => {
    return (
      <div key={todo.id}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });

  // let filteredTodos = todos
  //   .filter(({ title }) => {
  //     return title.indexOf(term) >= 0;
  //   })
  //   .slice(0, 10)
  //   .map((todo) => {
  //     return (
  //       <div key={todo.id}>
  //         <p>
  //           <strong>{todo.title}</strong>
  //         </p>
  //       </div>
  //     );
  //   });

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  return (
    // <div>
    //   <h2>Todos</h2>
    //   <input
    //     type="text"
    //     value={term || ''}
    //     onChange={(e) => setTerm(e.target.value)}
    //   />
    //   <div>{filteredTodos}</div>
    // </div>
    <div>
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, 'todos');

// export default TodoList;
export default SearchTodos;
