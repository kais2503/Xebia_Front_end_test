import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import styles from './main.module.scss'
import BookStore from './Components/Organism/BookStore';
import {store} from './store';
import {Header} from "./Components/Molecules/Header/index";
import {Modal} from "./Components/Atoms/Modal/index";
import {Cart} from "./Components/Organism/Cart";
import {selectors} from "./selectors/index";
import {Spinner} from "./Components/Atoms/Spinner/index";
import {getBooksRequest} from "./actions/bookStore";
import {SearchBar} from "./Components/Atoms/SearchBar/index";

class PartialApp extends React.PureComponent {

  componentDidMount() {
    return this
      .props
      .getBooksRequest();
  }
  render() {
    const {cartValues, loading, getBooksRequest} = this.props;
    return (
      <div>

        <Header quantity={cartValues.length}/>
        <div className={styles['search-bar']}><SearchBar filterBooks={getBooksRequest}/></div>
        {loading
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

const mapDispatchToProps = dispatch => {
  return {
    getBooksRequest: (filter) => dispatch(getBooksRequest(filter))
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(PartialApp);

ReactDOM.render(
  <Provider store={store}>
  <Router><App/></Router>
</Provider>, document.querySelector("#root"));