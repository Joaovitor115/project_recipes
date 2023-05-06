import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { /* BrowserRouter */ Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import Login from './pages/Login';
import SellerOrders from './pages/SellerOrders';
import CustomerProducts from './pages/CustomerProducts';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={ Login } />
          {/* Rota Ficticia para passar no requisito 05 - temporario */}
          {/* <Route exact path="/customer/products" component={ Login } /> */}
          <Redirect exact from="/" to="/login" />
          <Route exact path="/seller/orders" component={ SellerOrders } />
          <Route exact path="/customer/products" component={ CustomerProducts } />
        </Switch>
      </div>
    );
  }
}

export default App;
