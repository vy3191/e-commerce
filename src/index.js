import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BaseLayout, App } from './components'
import './index.css';



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={ App } />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
, document.getElementById('root'));

