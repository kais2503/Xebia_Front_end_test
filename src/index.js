import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import styles from './main.scss'
import BookStore from './Components/Organism/BookStore';
import {store} from './store';
import {Header} from "./Components/Molecules/Header/index";
import {Modal} from "./Components/Atoms/Modal/index";
import {Cart} from "./Components/Organism/Cart";

const App = () => {
  return (
    <div>

      <Header quantity={0}/>
      <Switch>
        <Route exact path="/cart" component={Cart}/>
        <Route excat path="/" component={BookStore}/>
      </Switch>
    </div>

  );
};

ReactDOM.render(
  <Provider store={store}>
  <Router><App/></Router>
</Provider>, document.querySelector("#root"));