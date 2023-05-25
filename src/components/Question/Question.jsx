import { decode } from 'html-entities';
import './Question.css';
import { useEffect, useState } from 'react';

const Question = ({ question, quizzStatus, setCorrectAnswers }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState('');
  const answers = [...question.incorrect_answers, question.correct_answer];

  useEffect(checkAnswer, [selectedAnswer]);

  function selectAnswer(e) {
    setSelectedAnswer(e.target.textContent);
  }

  function checkAnswer() {
    if (selectedAnswer === question.correct_answer) {
      setIsCorrect('correct');
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    } else {
      setIsCorrect('incorrect');
    }
  }

  return (
    <div className='question-container'>
      <p className='question'>{decode(question.question)}</p>
      <div className='answers-container'>
        {answers.map((answer, index) => {
          const isAnswerSelected = decode(answer) === selectedAnswer;

          return (
            <p
              key={index}
              className={`answer ${isAnswerSelected ? 'selected' : ''} ${
                quizzStatus === 'finished' && isAnswerSelected ? isCorrect : ''
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
