import { NavigateFunction, useNavigate } from 'react-router-dom';
import Header from '../../components/HeaderToBack';
import './index.css';

const Home = () => {
  let navigate: NavigateFunction = useNavigate();

  return (
    <>
      <Header />
      <div className="HomeContainer">
        <h1>aqui e a home</h1>
      </div>
    </>
  );
};

export default Home;
