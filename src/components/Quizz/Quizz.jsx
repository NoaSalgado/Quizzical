import { useEffect, useState } from 'react';

import Loader from '../Loader/Loader';
import Question from '../Question/Question';
import Button from '../Button/Button';
import './Quizz.css';

const Quizz = ({ quizzStatus, endQuizz, startGame }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState();
  const [correctAnswrs, setCorrectAnswers] = useState(0);

  useEffect(getQuestions, []);

  function getQuestions() {
    fetch(`https://opentdb.com/api.php?amount=5`)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
        setIsLoading(false);
      });
  }

  function restartQuizz() {
    startGame();
    setIsLoading(true);
    getQuestions();
    setCorrectAnswers(0);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='quizz'>
          <div className='quizz-questions'>
            {questions.map((question, index) => (
              <Question
                key={index}
                question={question}
                quizzStatus={quizzStatus}
                setCorrectAnswers={setCorrectAnswers}
              />
            ))}
          </div>
          {quizzStatus === 'started' && (
            <Button handleClick={endQuizz}>Check Answers</Button>
          )}
          {quizzStatus === 'finished' && (
            <div className='quizz-results'>
              <p>
                You scored {correctAnswrs}/{questions.length} correct answers
              </p>
              <Button handleClick={restartQuizz}>Play again</Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Quizz;
