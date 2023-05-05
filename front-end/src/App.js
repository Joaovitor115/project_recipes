import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { /* BrowserRouter */ Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <img> Logo </img> */}
        <p>Trybeer</p>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Redirect exact from="/" to="/login" />
          <Route exact path="/register" component={ Register } />
        </Switch>
      </div>
    );
  }
}

export default App;
