import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import store from './redux/redux-store'
import {Provider} from "react-redux";

const rerend = () => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer />
        </Provider>,
        document.getElementById('root')
    );
}

rerend()

store.subscribe(() => {
    rerend(store.getState())
})