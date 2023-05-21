import Button from '../Button/Button';
import './Home.css';

const Home = ({ startGame }) => {
  return (
    <header className='header'>
      <h1 className='main-heading'>Quizzical</h1>
      <Button handleClick={startGame}>Start Quizz</Button>
    </header>
  );
};

export default Home;
