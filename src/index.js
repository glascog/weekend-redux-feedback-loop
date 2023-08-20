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
      console.log('in feedbackInfo, action:', action)
      console.log('in feedbackInfo, state:', state)                              
    if(action.type === 'ADD_FEEDBACK') {
        return [...state, action.payload]
    }
    return state
}

// The store
const storeInstance = createStore(
    combineReducers({
        feedbackInfo
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
