import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/language';
import { Texts } from '../../contexts/language/languages';
import DropDownMenu from '../LanguageMenu';

import './index.css';

const Header = () => {
  let navigate: NavigateFunction = useNavigate();
  let { interfaceLanguage } = useLanguageContext() ?? {};

  return (
    <>
      <header className="headerContainer">
        <div className="containerName">
          <div onClick={() => navigate('/')} className="letterRContainer">
            <span className="letterR">R</span>
          </div>
          <h1 className="name">Ramon Lopes</h1>
        </div>
        <div className="containerOptions">
          <span className="text" onClick={() => navigate('/')}>
            {interfaceLanguage?.Headerhome}
          </span>
          <span className="text" onClick={() => navigate('/about')}>
            {interfaceLanguage?.Headerabout}
          </span>
          <span className="text" onClick={() => navigate('/skills')}>
            {interfaceLanguage?.Headerskills}
          </span>
          <span className="text" onClick={() => navigate('/works')}>
            {interfaceLanguage?.Headerworks}
          </span>
          <span className="text" onClick={() => navigate('/contact')}>
            {interfaceLanguage?.Headercontact}
          </span>
          <span className="text">
            <DropDownMenu />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
