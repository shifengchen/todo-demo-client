import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
