import { HashRouter as Router, Route, Link } from 'react-router-dom';

function SubmissionView() {

    return (
        <>
        <h1>⭐️ Submission Success! ⭐️</h1>
            <h2>Thank You!</h2>
           
            <Link to="/">
                <button id="reset">Leave New Feedback</button>
            </Link>
        </>
    )
}

export default SubmissionView;