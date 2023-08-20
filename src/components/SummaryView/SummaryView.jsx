import { HashRouter as Router, Route, Link } from 'react-router-dom';

function SummaryView() {

    return (
        <>
        <h1>Review Your Feedback</h1>
            <h3>Feelings: {5}</h3>
            <h3>Understanding: {5}</h3>
            <h3>Support: {5}</h3>
            <h3>Comments: {'I love coding!'}</h3>

            <Link to="/submission">
                <button id="submit">SUBMIT</button>
            </Link>
        </>
    )
}

export default SummaryView;