import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';


function SubmissionView() {

const dispatch = useDispatch();
const RESET_FEEDBACK = 'RESET_FEEDBACK';
let feedbackInfo = useSelector(store => store.feedbackInfo)

const resetFeedback = () => {
    return {
        type: RESET_FEEDBACK,
    }
};

// initial state of reducer
const initialState = [];

// update state to empty array
feedbackInfo = (state = initialState, action) => {
    action.type = RESET_FEEDBACK
    return [];
}

const handleReset = () => {
    dispatch(resetFeedback());
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