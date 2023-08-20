import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';

// Collect support data from input and dispatch
function SupportView() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState('');

    // Send support data to reducer
    const handleSupport = () => {
        if(support !== '') {
            dispatch({
                type: 'ADD_FEEDBACK',
                payload: support
            });
            console.log('support rating:', support)
            history.push('/comment') // navigate to next page only if support field is not empty
        } else {
            alert('Please rate how well supported you feel');
        }

    }

    return (
       <>
       <Header />
       <h1>How well are you being supported?</h1>
            
            <form>
                <label>Support? </label>
                <input type="number" 
                        value={support} 
                        min="1" 
                        max="5"
                        onChange={(event) => setSupport(event.target.value)} 
                />
            </form>
            
                <button id="next" onClick={handleSupport}>Next</button>
            
       </> 
    )
}

export default SupportView;