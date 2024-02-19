import { NavigateFunction, useNavigate } from 'react-router-dom';
// import { useLanguageContext } from '../../contexts/language';
// import { useThemeContext } from '../../contexts/dark-lightMode';
import './index.css';

const Header = () => {
  let navigate: NavigateFunction = useNavigate();
  // let { language } = useLanguageContext() ?? {};
  // let { theme } = useThemeContext() ?? {};
  return (
    <>
      <header className="headerContainer">
        <div className="containerName">
          <div className="letterRContainer">
            <span className="letterR">R</span>
          </div>
          <h1 className="name">Ramon Lopes</h1>
        </div>
        <div className="containerOptions">
          <span className="text" onClick={() => navigate('/')}>
            Home
          </span>
          <span className="text" onClick={() => navigate('/about')}>
            About
          </span>
          <span className="text" onClick={() => navigate('/skills')}>
            Skills
          </span>
          <span className="text" onClick={() => navigate('/works')}>
            Works
          </span>
          <span className="text" onClick={() => navigate('/contact')}>
            Contact
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
