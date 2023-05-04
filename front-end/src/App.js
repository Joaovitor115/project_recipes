import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { /* BrowserRouter */ Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <img> Logo </img> */}
        <p>Trybeer</p>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/login" component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;
