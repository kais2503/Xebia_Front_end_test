import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import styles from './main.scss'
import Recap from './Components/Organism/Recap';
import BookStore from './Components/Organism/BookStore';
import {store} from './store';

const App = () => {
  return (
    <Switch>
      <Route excat path="/" component={BookStore}/>
      <Route exact path="/recap" component={Recap}/>
    </Switch>
  );
};

ReactDOM.render(
  <Provider store={store}>
  <Router><App/></Router>
</Provider>, document.querySelector("#root"));