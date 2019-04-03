import * as React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({});

const store = createStore(rootReducer);
const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App message={"friend"}/>
    </Provider>,
    rootElement
);
