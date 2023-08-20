import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';


function CommentView() {
    return (
       <>
       <Header />
       <h1>Do you have any additional comments?</h1>
            
            <form>
                <label>Comments </label>
                <input type="text" id="comments" />
            </form>
            
            <Link to="/summary">
                <button id="next">Next</button>
            </Link>
       </> 
    )
}

export default CommentView;