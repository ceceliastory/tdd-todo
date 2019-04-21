import * as React from 'react';
import {render} from 'react-dom';
import AddTaskForm from './AddTaskForm';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./task.reducers";

const rootReducer = combineReducers({
    tasks: tasksReducer
});

const store = createStore(rootReducer);
const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <AddTaskForm/>
    </Provider>,
    rootElement
);
