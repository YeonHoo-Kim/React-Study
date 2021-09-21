import React from 'react';
import UseStore from '../../../stores/UseStore';
import { observer } from 'mobx-react';

const RunInAction = observer(() => {
  const { RunInActionStore } = UseStore();

  return (
    <div>
      {console.log('rendered')}
      state : {RunInActionStore.state}
      <div>
        <button onClick={() => RunInActionStore.fetchUser()}>fetchUser</button>
      </div>
    </div>
  );
});

export default RunInAction;
