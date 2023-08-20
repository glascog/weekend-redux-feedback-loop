import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';


function SupportView() {
    return (
       <>
       <Header />
       <h1>How well are you being supported?</h1>
            
            <form>
                <label>Support? </label>
                <input type="number" id="support" min="1" max="5" />
            </form>
            
            <Link to="/comment">
                <button id="next">Next</button>
            </Link>
       </> 
    )
}

export default SupportView;