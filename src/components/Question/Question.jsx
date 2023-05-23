import { decode } from 'html-entities';
import './Question.css';
import { useState } from 'react';

const Question = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const answers = [...question.incorrect_answers, question.correct_answer];

  function selectAnswer(e) {
    setSelectedAnswer(e.target.textContent);
    console.log(selectedAnswer);
  }

  return (
    <div className='question-container'>
      <p className='question'>{decode(question.question)}</p>
      <div className='answers-container'>
        {answers.map((answer, index) => {
          return (
            <p
              key={index}
              className={`answer ${
                decode(answer) === selectedAnswer ? 'selected' : ''
              }`}
              onClick={selectAnswer}>
              {decode(answer)}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
