import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';


function FeelingView() {
    return (
       <>
       <h1>How are you feeling today?</h1>
            
            <form>
                <label for="feeling">Feeling? </label>
                <input type="number" id="feeling" min="1" max="5" />
            </form>
            
            <Link to="/understanding">
                <button id="next">Next</button>
            </Link>
       </> 
    )
}

export default FeelingView;