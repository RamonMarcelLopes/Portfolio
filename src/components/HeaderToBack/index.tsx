import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/language';
import { Texts } from '../../contexts/language/languages';
import DropdownMenu from '../dropDownMenu';
//import { useThemeContext } from '../../contexts/dark-lightMode';
import './index.css';
import { useEffect, useState } from 'react';

const Header = () => {
  let navigate: NavigateFunction = useNavigate();
  let { interfaceLanguage, changeLanguage } = useLanguageContext() ?? {};
  // let { theme } = useThemeContext() ?? {};

  let ff = () => {
    changeLanguage(2);
  };
  let ff2 = () => {
    changeLanguage(1);
  };

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
            <DropdownMenu />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
