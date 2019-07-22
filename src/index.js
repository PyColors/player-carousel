import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from './package/templates/App'
import configureStore from "./store";

import './package/styles/style.scss';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
