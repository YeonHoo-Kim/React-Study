import TimerStore from './TimerStore';
import CounterStore from './CounterStore';
import RunInActionStore from './RunInActionStore';

// Store 라우터
const UseStore = () => {
  return {
    TimerStore,
    CounterStore,
    RunInActionStore,
  };
};
export default UseStore;
