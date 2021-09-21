import { observable, runInAction } from 'mobx';
import axios from 'axios';

// Model the app state
const RunInActionStore = observable({
  user: {
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  },

  state: 'pending', // "pending", "done" or "error"
  async fetchUser() {
    console.log('fetchUser clicked');
    this.state = 'pending';
    try {
      const user = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      runInAction(() => {
        this.user = user;
        this.state = 'done';
        console.log(this.user);
      });
    } catch (e) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  },
});

export default RunInActionStore;
