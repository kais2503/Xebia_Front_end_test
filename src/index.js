import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import styles from './main.scss'
import Recap from './Components/Organism/Recap';
import BookStore from './Components/Organism/BookStore';
import {store} from './store';
import {Header} from "./Components/Molecules/Header/index";
import {Modal} from "./Components/Atoms/Modal/index";

const App = () => {
  return (
    <div>

      <Header quantity={0}/>
      <Switch>
        <Route excat path="/" component={BookStore}/>
        <Route exact path="/recap" component={Recap}/>
      </Switch>
    </div>

  );
};

ReactDOM.render(
  <Provider store={store}>
  <Router><App/></Router>
</Provider>, document.querySelector("#root"));