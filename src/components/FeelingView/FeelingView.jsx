import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';

// Collect feeling data from input and dispatch 
function FeelingView() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState('');
    
    // Send feeling data to reducer
    const handleFeeling = () => {
       if(feeling !== '') {
        dispatch({
            type: 'ADD_FEEDBACK',
            payload: feeling
        });
        console.log('feeling rating:', feeling)
        history.push('/understanding') //navigate to next page only if feeling is not empty
    } else {
        alert('Please rate how you are feeling');
    }
}


    return (
       <>
       <Header />
       <h1>How are you feeling today?</h1>
            
            <form>
                <label>Feeling? </label>
                <input type="number"  
                        value={feeling}                      
                        min="1" 
                        max="5"
                        onChange={(event) => setFeeling(event.target.value)}    
                />
            </form>
                <button id="next" onClick={handleFeeling}>Next</button>
                {/* disabled={!feeling} */}
       </> 
    )
}

export default FeelingView;