import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

// View all ratings and comments that have been entered
function SummaryView() {

// access feedbackInfo reducer (array of feedback)
const feedbackInfo = useSelector(store => store.feedbackInfo)

// Send feedbackInfo to DB
const handleSubmit = (event) => {
    event.preventDefault();

    let newFeedback = {
        feeling: feedbackInfo[0],
        understanding: feedbackInfo[1],
        support: feedbackInfo[2],
        comments: feedbackInfo[3]
    }

   axios.post('/feedback', newFeedback);
   console.log('data successfully submitted:', newFeedback)
    .then(response => {

    }).catch(error => {
        console.error('Error submitting new feedback, /feedback:', error)
    })
} 

    return (
        <>
        <h1>Review Your Feedback</h1>
            <h3>Feelings: {feedbackInfo[0]}</h3>
            <h3>Understanding: {feedbackInfo[1]}</h3>
            <h3>Support: {feedbackInfo[2]}</h3>
            <h3>Comments: {feedbackInfo[3]}</h3>

            <Link to="/submission">
                <button id="submit"
                        onClick={handleSubmit}>
                        SUBMIT
                </button>
            </Link>
        </>
    )
}

export default SummaryView;