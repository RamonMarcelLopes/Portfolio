import { NavigateFunction, useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate: NavigateFunction = useNavigate();

  return (
    <div>
      <h1>home</h1>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
      <button onClick={() => navigate('/skills')}>Skills</button>
      <button onClick={() => navigate('/works')}>Works</button>
    </div>
  );
};

export default Home;
