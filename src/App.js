import React from 'react';
import { loadData } from './utils/loadData';
import IssueList from './components/issueList';
import './App.css';

function App() {
  return (
    <div className="App">
      <IssueList />
    </div>
  )
} 

export default App;
