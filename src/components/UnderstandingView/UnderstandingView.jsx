import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// collect understanding data from input and dispatch
function UnderstandingView() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState('');
    
    // send understanding data to reducer
    const handleUnderstanding = () => {
        if(understanding !== '') {
            dispatch({
                type: 'ADD_FEEDBACK',
                payload: understanding
            });
            console.log('understanding rating:', understanding)
            history.push('/support') //navigate to next page only if understanding is not empty
        } else {
            alert('Please rate your understanding')
        }
    }
    
    
    return (
       <>
       <Header />
       <h1>How well are you understanding the content?</h1>
            
            <form>
                <label>Understanding? </label>
                <input type="number" 
                        value={understanding} 
                        min="1" 
                        max="5" 
                        onChange={(event) => setUnderstanding(event.target.value)}
                />
            </form>
                <button id="next" onClick={handleUnderstanding}>Next</button>
       </> 
    )
}

export default UnderstandingView;