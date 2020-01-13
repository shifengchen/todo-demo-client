import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import TodoDetail from './TodoDetail'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/detail" component={TodoDetail} />
      </Switch>
    </div>
  );
}

export default App;
