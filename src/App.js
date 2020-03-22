import React from 'react';
import IssueList from './components/issueList';
import Enter from './components/enter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Enter />
      <IssueList />
    </div>
  )
} 

export default App;
