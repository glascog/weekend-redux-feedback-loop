import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';

function SubmissionView() {

const dispatch = useDispatch();
const feedbackInfo = useSelector(store => store.feedbackInfo)


// initial state of reducer
// const initialState = [];

// update state to empty array
const handleReset = () => {
    dispatch({
        type: 'RESET_FEEDBACK',
    });
    // history.push('/') // navigate back to feelingView 
};

    return (
        <>
        <h1>⭐️ Submission Success! ⭐️</h1>
            <h2>Thank You!</h2>
           
            <Link to="/">
                <button id="reset"
                        onClick={handleReset}>
                        Leave New Feedback
                </button>
            </Link>
        </>
    )
}

export default SubmissionView;