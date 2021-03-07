import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BaseLayout, App, About, Contact } from './components'
import './index.css';



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={ App } />
        <Route path="/contact" component={ Contact } />
        <Route path="/about" component={ About } />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
, document.getElementById('root'));

