import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


function SummaryView() {

const feedback = useSelector(store => store.feedbackInfo)

    return (
        <>
        <h1>Review Your Feedback</h1>
            <h3>Feelings: {feedback[0]}</h3>
            <h3>Understanding: {feedback[1]}</h3>
            <h3>Support: {feedback[2]}</h3>
            <h3>Comments: {feedback[3]}</h3>

            <Link to="/submission">
                <button id="submit">SUBMIT</button>
            </Link>
        </>
    )
}

export default SummaryView;