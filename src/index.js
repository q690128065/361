import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "store";
// import * as serviceWorker from './serviceWorker';

//引入全局样式重置文件

import "styles/reset.css";

// 引入antd mobild  样式文件

// import 'antd-mobile/dist/antd-mobile.css'

import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Provider store={store} >
      <App/>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
