import React from 'react';
import IssueList from './components/IssueList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={IssueList}/>
      </Router>
    </div>
  )
} 

export default App;
