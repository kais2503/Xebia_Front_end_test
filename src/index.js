import React from "react";
import ReactDOM from "react-dom";

import styles from './main.module.scss'
import Recap from './Components/Organism/Recap';
import BookStore from './Components/Organism/BookStore';


const App = () => {
return (<div><BookStore/> <Recap/><div className={styles.container}>Hello React,Webpack 4 & Babel 7!</div></div>);
};

ReactDOM.render(<App />, document.querySelector("#root"));