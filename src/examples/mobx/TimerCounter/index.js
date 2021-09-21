import React from 'react';
import UseStore from '../../../stores/UseStore';
import { observer } from 'mobx-react';

const { CounterStore, TimerStore } = UseStore();

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
  TimerStore.increase();
}, 1000);

const TimerCounter = observer(() => {
  return (
    <>
      <div>
        Timer
        <button onClick={() => TimerStore.reset()}>
          Seconds passed: {TimerStore.secondsPassed}
        </button>
      </div>
      <div>
        Counter value: {CounterStore.value}
        <button onClick={() => CounterStore.increase()}>increase(+)</button>
        <button onClick={() => CounterStore.decrease()}>decrease(-)</button>
      </div>
    </>
  );
});

export default TimerCounter;
