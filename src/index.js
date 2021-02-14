import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers";

import App from "./containers/App";
import "./scss/main.scss";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById("root")
);
