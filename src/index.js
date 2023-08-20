import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux stuff
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

// reducer for all feedback data
const feedbackInfo = (state = [], action) => {
    // TODO: save all feedback info from the server

}

// The store
const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(
        // logger
    )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
