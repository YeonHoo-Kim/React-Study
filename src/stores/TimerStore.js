import { observable } from 'mobx';

// Model the app state
const TimerStore = observable({
  secondsPassed: 0,
  increase() {
    this.secondsPassed += 1;
  },
  reset() {
    this.secondsPassed = 0;
  },
});

export default TimerStore;
