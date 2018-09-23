import React from 'react';
import ReactDOM from 'react-dom';
// redux stuff import
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './store/reducers';

const store = createStore(reducers, {}, applyMiddleware())

ReactDOM.render(
    <Provider
        store={store}
    >
        <App />
    </Provider>,
    document.getElementById('root')
);
// ReactDom.render() take 2 arguments

registerServiceWorker();
