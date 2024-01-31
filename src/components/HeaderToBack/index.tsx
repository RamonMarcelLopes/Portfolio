import { NavigateFunction, useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate: NavigateFunction = useNavigate();
  return (
    <>
      <button onClick={() => navigate('/')}> Back to home </button>
    </>
  );
};

export default Header;
