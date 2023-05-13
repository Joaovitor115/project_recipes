import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { /* BrowserRouter */ Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrders from './pages/CustomerOrders';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import SellerOrders from './pages/SellerOrders';
import SellerOrderDetails from './pages/SellerOrderDetails';
import AdminManage from './pages/Admin';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Redirect exact from="/" to="/login" />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ CustomerProducts } />
          <Route exact path="/customer/orders" component={ CustomerOrders } />
          <Route exact path="/customer/orders/:id" component={ CustomerOrderDetails } />
          <Route exact path="/customer/checkout" component={ CustomerCheckout } />
          <Route exact path="/seller/orders" component={ SellerOrders } />
          <Route exact path="/seller/orders/:id" component={ SellerOrderDetails } />
          <Route exact path="/admin/manage" component={ AdminManage } />
        </Switch>
      </div>
    );
  }
}

export default App;
