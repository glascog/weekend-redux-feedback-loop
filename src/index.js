import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux stuff
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

const initialState = [];

// reducer for all feedback data
const feedbackInfo = (state = [], action) => {                  
    if(action.type === 'ADD_FEEDBACK') {
        return [...state, action.payload]
    } else if (action.type === 'RESET_FEEDBACK') {
        return state = initialState
    }
    //   console.log('in feedbackInfo, action:', action)
    //   console.log('in feedbackInfo, state:', state)      
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
