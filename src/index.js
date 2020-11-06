import './index.css'
import configureStore from "./store/state";

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import App from './App'

const renderApp = preloadedState => {
    const store = configureStore(preloadedState);
    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.querySelector('#app')
    )
};


(async () => renderApp())();