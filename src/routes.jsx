import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart/cart';
import Payment from './components/Payment/payment';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component = {Cart} />
      <Route path="/payment" component = {Payment} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
