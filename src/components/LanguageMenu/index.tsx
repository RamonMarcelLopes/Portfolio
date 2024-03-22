import React, {
  ReactEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import { useLanguageContext } from '../../contexts/language';

const DropDownMenu = () => {
  let { changeLanguage, language } = useLanguageContext() ?? {};
  const [menuAberto, setMenuAberto] = useState(false);
  const [idiomaSelecionado, setIdiomaSelecionado] = useState(language);
  const bandeiraPtBr = 'https://static.significados.com.br/flags/br.svg';
  const bandeiraEnUs = 'https://static.significados.com.br/flags/us.svg';

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const selecionarIdioma = (idioma: any) => {
    setIdiomaSelecionado(idioma);
    setMenuAberto(false);
  };
  useEffect(() => {
    if (idiomaSelecionado === 'en-US') {
      changeLanguage(2);
    } else if (idiomaSelecionado === 'pt-BR') {
      changeLanguage(1);
    }
  }, [idiomaSelecionado]);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleMenu}>
        {idiomaSelecionado === 'en-US' ? (
          <>
            <img className="bandeira-img" src={bandeiraEnUs} alt="EUA" />
            <span className="span-pt-en">en-US</span>
          </>
        ) : (
          <>
            <img className="bandeira-img" src={bandeiraPtBr} alt="Brasil" />
            <span className="span-pt-en">pt-BR</span>
          </>
        )}
      </button>

      {menuAberto && (
        <ul className="dropdown-menu">
          <li className="li-drop" onClick={() => selecionarIdioma('en-US')}>
            <img className="bandeira-img" src={bandeiraEnUs} alt="EUA" />
            <span className="texten-pt">en-US</span>
          </li>
          <li className="li-drop" onClick={() => selecionarIdioma('pt-BR')}>
            <img className="bandeira-img" src={bandeiraPtBr} alt="Brasil" />
            <span className="texten-pt">pt-BR</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
