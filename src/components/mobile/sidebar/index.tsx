import { useNavigate } from 'react-router-dom';
import x from '../../../public/x.svg';
import './index.css';
import { useLanguageContext } from '../../../contexts/language';
import DropDownMenu from '../../LanguageMenu';
type closeProp = {
  close: (param: string) => void;
};
const SideBarMobile = ({ close }: closeProp) => {
  let handleClickClose = () => {
    close('');
  };
  let navigate = useNavigate();
  let { interfaceLanguage } = useLanguageContext() ?? {};
  return (
    <>
      <div className="containerSideBar">
        <div className="containerCloseSideBar">
          <div className="borderCloseButton" onClick={handleClickClose}>
            <img className="buttonCloseModal" src={x} alt="X to close " />
          </div>
        </div>
        <div className="containerAllOptions">
          <div className="optionContainer">
            <h1 className="sideBarH1" onClick={() => navigate('/')}>
              {interfaceLanguage?.Headerhome}
            </h1>
          </div>
          <div className="optionContainer">
            <h1 className="sideBarH1" onClick={() => navigate('/about')}>
              {interfaceLanguage?.Headerabout}
            </h1>
          </div>
          <div className="optionContainer">
            <h1 className="sideBarH1" onClick={() => navigate('/skills')}>
              {interfaceLanguage?.Headerskills}
            </h1>
          </div>
          <div className="optionContainer">
            <h1 className="sideBarH1" onClick={() => navigate('/works')}>
              {interfaceLanguage?.Headerworks}
            </h1>
          </div>
          <div className="optionContainer">
            <h1 className="sideBarH1" onClick={() => navigate('/contact')}>
              {interfaceLanguage?.Headercontact}
            </h1>
          </div>
        </div>
        <div className="ContainerLanguages">
          <DropDownMenu />
        </div>
      </div>
    </>
  );
};
export default SideBarMobile;
