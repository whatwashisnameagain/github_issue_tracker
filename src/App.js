import React from 'react';
import Issue from './components/Issue';
import IssueList from './components/IssueList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="flex-center">
      <Router>
        <Link to="/">
          <p className="btn morph-active">Home</p>
        </Link> 
        <Route 
          exact 
          path="/" 
          component={IssueList}
        />
        
        <Route 
          path="/issue/:issue_number?" 
          component={Issue}
        />
      
      </Router>
    </div>
  )
} 

export default App;
