import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';

function UnderstandingView() {
    return (
       <>
       <Header />
       <h1>How well are you understanding the content?</h1>
            
            <form>
                <label>Understanding? </label>
                <input type="number" id="understanding" min="1" max="5" />
            </form>
            
            <Link to="/support">
                <button id="next">Next</button>
            </Link>
       </> 
    )
}

export default UnderstandingView;