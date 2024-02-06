import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/language';
import { useThemeContext } from '../../contexts/dark-lightMode';

const Header = () => {
  let navigate: NavigateFunction = useNavigate();
  let { language } = useLanguageContext() ?? {};
  let { theme } = useThemeContext() ?? {};
  return (
    <>
      <h1>{language}</h1>
      <h2>{theme}</h2>
      <button onClick={() => navigate('/')}> Back to home </button>
      <button onClick={() => console.log(theme)}>log</button>
    </>
  );
};

export default Header;
