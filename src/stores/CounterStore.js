import { observable } from 'mobx';

// Model the app state
const CounterStore = observable({
  value: 0,
  increase() {
    this.value += 1;
  },
  decrease() {
    this.value -= 1;
  },
});

export default CounterStore;
