import { useState } from 'react';

import Home from './components/Home/Home';
import Quizz from './components/Quizz/Quizz';
import './App.css';

function App() {
  const [quizzStatus, setQuizzStatus] = useState('not started');

  const startGame = () => {
    setQuizzStatus('started');
  };

  const endQuizz = () => {
    setQuizzStatus('finished');
  };

  return (
    <>
      <main>
        {quizzStatus === 'not started' ? (
          <Home startGame={startGame} />
        ) : (
          <Quizz
            quizzStatus={quizzStatus}
            endQuizz={endQuizz}
            startGame={startGame}
          />
        )}
      </main>
      <div className='shape-top'></div>
      <div className='shape-bottom'></div>
    </>
  );
}

export default App;
