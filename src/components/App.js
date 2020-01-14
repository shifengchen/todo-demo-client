import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Test from './Test'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  );
}

export default App;
