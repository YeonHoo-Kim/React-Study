import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import Works from './page/Works';
import Projects from './page/Projects';
import Data from './page/Data';
import About from './page/About';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <Router basename="/">
      <div className="app-header">
        <AppHeader />
      </div>
      <div className="app-body">
        <Switch>
          <Route exact path="/" />
          <Route path="/works" component={Works} />
          <Route path="/projects" component={Projects} />
          <Route path="/data" component={Data} />
          <Route path="/about" component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
