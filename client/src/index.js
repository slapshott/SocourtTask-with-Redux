import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import reducers from './reducers/reducers'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import '../node_modules/toastr/build/toastr.min.css';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root')); 
registerServiceWorker();
