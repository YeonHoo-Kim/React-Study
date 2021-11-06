import React from 'react';
import CounterNoob from './1-noob/Counter';
import CounterAdvanced from './2-advanced/Counter';
import CounterPro from './3-pro/Counter';
import UserNoob from './1-noob/User';
import UserAdvanced from './2-advanced/User';
import UserPro from './3-pro/User';
import ListNoob from './1-noob/Todos';
import ListAdvanced from './2-advanced/Todos';
import ListPro from './3-pro/Todos';

const NoobAdvancedPro = () => {
  const initialTodos = [
    { id: 1, complete: false, name: 'Do Laundry' },
    { id: 2, complete: true, name: 'Wash Dishes' },
    { id: 3, complete: false, name: 'Record this video' },
  ];

  return (
    <div>
      <h2>Comparison - Noob / Advanced / Pro !!!</h2>
      {/* <CounterNoob initialCount={4} /> */}
      {/* <CounterAdvanced initialCount={4} /> */}
      {/* <CounterPro initialCount={4} /> */}
      {/* <UserNoob age={25} /> */}
      {/* <UserAdvanced age={25}/> */}
      {/* <UserPro age={25} /> */}
      {/* <ListNoob initialTodos={initialTodos} /> */}
      {/* <ListAdvanced initialTodos={initialTodos} /> */}
      <ListPro initialTodos={initialTodos} />
    </div>
  );
};

export default NoobAdvancedPro;
