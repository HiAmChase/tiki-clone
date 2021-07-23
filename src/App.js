import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Checkout from './component/Checkout/Checkout';
import SingleProduct from './component/SingleProduct/SingleProduct';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/products/:id">
            <Header />
            <SingleProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
