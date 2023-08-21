import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


// View all ratings and comments that have been entered
function SummaryView() {

// access feedbackInfo reducer (array of feedback)
const feedbackInfo = useSelector(store => store.feedbackInfo)
const history = useHistory();


// Send feedbackInfo to DB
const handleSubmit = (event) => {
    event.preventDefault();

    let newFeedback = {
        feeling: feedbackInfo[0],
        understanding: feedbackInfo[1],
        support: feedbackInfo[2],
        comments: feedbackInfo[3]
    }

   axios.post('/feedback', newFeedback)
    .then(response => {
        console.log('response:', response)
    }).catch(error => {
        console.error('Error submitting new feedback, /feedback:', error)
    })
    history.push('/submission') // navigate to successful submission
} 

    return (
        <>
        <h1>Review Your Feedback</h1>
            <h3>Feelings: {feedbackInfo[0]}</h3>
            <h3>Understanding: {feedbackInfo[1]}</h3>
            <h3>Support: {feedbackInfo[2]}</h3>
            <h3>Comments: {feedbackInfo[3]}</h3>

            
                <button id="submit"
                        onClick={handleSubmit}>
                        SUBMIT
                </button>
          
        </>
    )
}

export default SummaryView;