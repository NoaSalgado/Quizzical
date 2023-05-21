import { useEffect, useState } from 'react';

import Question from '../Question/Question';
import './Quizz.css';

const Quizz = () => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=5`)
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }, []);
  return (
    <div className='quizz'>
      {questions &&
        questions.map((question, index) => (
          <Question key={index} question={question} />
        ))}
    </div>
  );
};

export default Quizz;
