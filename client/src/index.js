import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
// import materializeCSS from 'materialize-css/dist/css/materialize.min.css'
// redux stuff import
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './store/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider
        store={store}
        className="container"
    >
        <App />
    </Provider>,
    document.getElementById('root')
);
// ReactDom.render() take 2 arguments

registerServiceWorker();

console.log("production stripe key: ", process.env.REACT_APP_STRIPE_PUBLIC_KEY);
console.log("environment is: ", process.env.NODE_ENV);