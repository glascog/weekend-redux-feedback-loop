import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// import components
import Header from '../Header/Header';
import FeelingView from '../FeelingView/FeelingView';
import UnderstandingView from '../UnderstandingView/UnderstandingView';
import SupportView from '../SupportView/SupportView';
import CommentView from '../CommentView/CommentView';
import SummaryView from '../SummaryView/SummaryView';
import SubmissionView from '../SubmissionView/SubmissionView';


function App() {

  return (
    <div className='App'>
      
      <Router>
        <div>
          <Route exact path="/">
            <FeelingView />
          </Route>

          <Route exact path="/understanding">
            <UnderstandingView />
          </Route>

          <Route exact path="/support">
            <SupportView />
          </Route>

          <Route exact path="/comment">
            <CommentView />
          </Route>

          <Route exact path="/summary">
            <SummaryView />
          </Route>

          <Route exact path="/submission">
            <SubmissionView />
          </Route>
        </div>

        </Router>
      </div>
  );
}

export default App;

