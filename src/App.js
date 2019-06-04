import React from 'react';
import './App.css';
import Matrix from './components/Matrix/Matrix.js';
import ScoreBoard from './components/ScoreBoard/ScoreBoard.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


let history = []

function handleHistory(score){
  history.push(score);
}

function App() {


  return (
    <div className="App">
      <Matrix handleHistory={handleHistory}/>
      <ScoreBoard data={history} />
    </div>
  );
}

export default App;
