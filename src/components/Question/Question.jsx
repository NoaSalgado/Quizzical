import { decode } from 'html-entities';
import './Question.css';

const Question = ({ question }) => {
  const answers = [...question.incorrect_answers, question.correct_answer];
  console.log(answers);

  return (
    <div className='question-container'>
      <p className='question'>{decode(question.question)}</p>
      <div className='answers-container'>
        {answers.map((answer, index) => {
          return (
            <p key={index} className='answer'>
              {decode(answer)}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
