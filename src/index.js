import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BaseLayout, App, About, Contact, Cars, ShowCar, Payment } from './components'
import './index.css';



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={ App } />
        <Route path="/cars/:id" component={ ShowCar } />
        <Route path="/cars" component={ Cars} />
        <Route path="/contact" component={ Contact } />
        <Route path="/about" component={ About } />
        <Route path="/proceed-to-payment" component={ Payment } />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
, document.getElementById('root'));

