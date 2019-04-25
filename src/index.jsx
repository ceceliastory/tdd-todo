import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./task/task.reducers";
import App from "./App";

const rootReducer = combineReducers({
    tasks: tasksReducer
});

const store = createStore(rootReducer);
const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);
