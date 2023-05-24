import { useEffect, useState } from 'react';

import Question from '../Question/Question';
import Button from '../Button/Button';
import './Quizz.css';

const Quizz = ({ quizzStatus, endQuizz, startGame }) => {
  const [questions, setQuestions] = useState();
  const [correctAnswrs, setCorrectAnswers] = useState(0);

  useEffect(getQuestions, []);

  function getQuestions() {
    fetch(`https://opentdb.com/api.php?amount=5`)
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }

  function restartQuizz() {
    startGame();
    getQuestions();
    setCorrectAnswers(0);
  }

  return (
    <div className='quizz'>
      {questions &&
        questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            quizzStatus={quizzStatus}
            setCorrectAnswers={setCorrectAnswers}
          />
        ))}
      {quizzStatus === 'started' && (
        <Button handleClick={endQuizz}>Check Answers</Button>
      )}
      {quizzStatus === 'finished' && (
        <>
          <p>
            You scored {correctAnswrs}/{questions.length} correct answers
          </p>
          <Button handleClick={restartQuizz}>Play again</Button>
        </>
      )}
    </div>
  );
};

export default Quizz;
