import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import styles from './main.scss'
import BookStore from './Components/Organism/BookStore';
import {store} from './store';
import {Header} from "./Components/Molecules/Header/index";
import {Modal} from "./Components/Atoms/Modal/index";
import {Cart} from "./Components/Organism/Cart";
import {selectors} from "./selectors/index";
import {Spinner} from "./Components/Atoms/Spinner/index";

class PartialApp extends React.PureComponent {
  render() {
    const {cartValues, loading} = this.props;
    return (
      <div>

        <Header quantity={cartValues.length}/> {loading
          ? <Spinner/>
          : <Switch>
            <Route exact path="/cart" component={Cart}/>
            <Route excat path="/" component={BookStore}/>
          </Switch>
}
      </div>

    );
  };
}
const mapStateToProps = (state) => {
  return {
    cartValues: selectors
      .cart
      .cartValuesSelector(state),
    loading: selectors
      .bookStore
      .loadingSelector(state)
  };
}

const App = connect(mapStateToProps)(PartialApp);

ReactDOM.render(
  <Provider store={store}>
  <Router><App/></Router>
</Provider>, document.querySelector("#root"));