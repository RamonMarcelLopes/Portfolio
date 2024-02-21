import { NavigateFunction, useNavigate } from 'react-router-dom';
import * as L from './language';
// import { useLanguageContext } from '../../contexts/language';
// import { useThemeContext } from '../../contexts/dark-lightMode';
import './index.css';
import { useState } from 'react';

const Header = () => {
  let navigate: NavigateFunction = useNavigate();
  // let { language } = useLanguageContext() ?? {};
  // let { theme } = useThemeContext() ?? {};
  const en = L.TextsEn;
  const pt = L.TextsPT;

  pt;

  let [language, setLanguage] = useState<L.language>(en);
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
            {language.home}
          </span>
          <span className="text" onClick={() => navigate('/about')}>
            {language.about}
          </span>
          <span className="text" onClick={() => navigate('/skills')}>
            {language.skills}
          </span>
          <span className="text" onClick={() => navigate('/works')}>
            {language.works}
          </span>
          <span className="text" onClick={() => navigate('/contact')}>
            {language.contact}
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
