import React from 'react';
import { Route } from 'react-router-dom';
import PageList from '../components/PageList';
import Example_MobX_TimerCounter from '../examples/mobx/TimerCounter';
import Example_MobX_RunInAction from '../examples/mobx/RunInAction';
import Example_HighOrderComponents from '../examples/hoc';
import Example_NoobAdvancedPro from '../examples/noob-advanced-pro';
import Example_DragAndDrop from '../examples/drag-and-drop';
import Example_Hooks from '../examples/hooks';
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
    {
      id: 3,
      link: '/examples/hoc',
      name: 'HighOrderComponents',
    },
    {
      id: 4,
      link: '/examples/noob-advanced-pro',
      name: 'NoobAdvancedPro',
    },
    {
      id: 5,
      link: '/examples/drag-and-drop',
      name: 'DragAndDrop',
    },
    {
      id: 6,
      link: '/examples/hooks',
      name: 'Hooks',
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
        <Route path="/examples/hoc" component={Example_HighOrderComponents} />
        <Route
          path="/examples/noob-advanced-pro"
          component={Example_NoobAdvancedPro}
        />
        <Route path="/examples/drag-and-drop" component={Example_DragAndDrop} />
        <Route path="/examples/hooks" component={Example_Hooks} />
      </div>
    </div>
  );
};

export default Examples;
