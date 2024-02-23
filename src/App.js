import React from 'react';
// import Issue from './components/Issue';
// import IssueList from './components/issueList';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="flex-center">
      <p>Hello</p>
      {/* <IssueList/> */}
      {/* <Router>
        <Link to="/">
          <p className="home">Home</p>
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
      
      </Router> */}
    </div>
  )
} 

export default App;
