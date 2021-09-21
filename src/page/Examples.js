import React from 'react';
import { Route } from 'react-router-dom';
import PageList from '../components/PageList';
import Example_MobX_TimerCounter from '../examples/mobx/TimerCounter';
import Example_MobX_RunInAction from '../examples/mobx/RunInAction';
import './Contents.css';

const Examples = () => {
  const Examples = [
    {
      id: 1,
      link: '/examples/mobx/TimerCounter',
      name: 'TimerCounter',
    },
    {
      id: 2,
      link: '/examples/mobx/RunInAction',
      name: 'RunInAction',
    },
  ];
  return (
    <div className="contents">
      <div className="contents-list">
        <PageList contents={Examples} />
      </div>
      <div className="contents-content">
        <Route
          path="/examples/mobx/TimerCounter"
          component={Example_MobX_TimerCounter}
        />
        <Route
          path="/examples/mobx/RunInAction"
          component={Example_MobX_RunInAction}
        />
      </div>
    </div>
  );
};

export default Examples;
