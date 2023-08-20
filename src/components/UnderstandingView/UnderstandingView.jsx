import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';


function UnderstandingView() {
    return (
       <>
       <h1>How well are you understanding the content?</h1>
            
            <form>
                <label for="understanding">Understanding? </label>
                <input type="number" id="understanding" min="1" max="5" />
            </form>
            
            <Link to="/support">
                <button id="next">Next</button>
            </Link>
       </> 
    )
}

export default UnderstandingView;