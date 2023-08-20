import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';


function FeelingView() {
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');
    
    // Send feeling data to store
    const handleFeeling = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEEDBACK',
            payload: feeling
        })
       console.log('feeling', feeling)
    }

    const handleFeelingChange = (event) => {
        setFeeling(event.target.value);
    }


    return (
       <>
       <Header />
       <h1>How are you feeling today?</h1>
            
            <form>
                <label>Feeling? </label>
                <input type="number"                        
                        min="1" 
                        max="5" 
                        onChange={handleFeelingChange}
                />
            </form>
            
            <Link to="/understanding">
                <button id="next" onClick={handleFeeling}>Next</button>
            </Link>
       </> 
    )
}

export default FeelingView;