import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';

// Collect comment from input and dispatch to global store
function CommentView() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comment, setComment] = useState('');

    // Send comment string to reducer
    const handleComment = () => {
        dispatch({
            type: 'ADD_FEEDBACK',
            payload: comment
        })
        console.log('comment:', comment)
    }

    return (
       <>
       <Header />
       <h1>Do you have any additional comments?</h1>
            
            <form>
                <label>Comments </label>
                <input type="text" 
                        value={comment} 
                        onChange={(event) => setComment(event.target.value)}
                />
            </form>
            
            <Link to="/summary">
                <button id="next" onClick={handleComment}>Next</button>
            </Link>
       </> 
    )
}

export default CommentView;