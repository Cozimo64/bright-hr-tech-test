import React from 'react';
import './App.css'; // Assuming global styles or resets if necessary
import Documents from './components/Documents';
import { documentsData } from './data/documentsData'; // Ensure this path matches your data file

function App() {
  return (
    <div className="App">
      <h1>Browse Documents</h1>
      <Documents documents={documentsData} />
    </div>
  );
}

export default App;
