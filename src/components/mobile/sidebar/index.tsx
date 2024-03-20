import { useNavigate } from 'react-router-dom';
import x from '../../../public/x.svg';
import './index.css';
type closeProp = {
  close: (param: string) => void;
};
const SideBarMobile = ({ close }: closeProp) => {
  let handleClickClose = () => {
    close('');
  };
  let navigate = useNavigate();
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
              Home
            </h1>
          </div>
          <div className="optionContainer">
            <h1 className="sideBarH1" onClick={() => navigate('/about')}>
              About
            </h1>
          </div>
          <div className="optionContainer">
            <h1 className="sideBarH1" onClick={() => navigate('/skills')}>
              Skills
            </h1>
          </div>
          <div className="optionContainer">
            <h1 className="sideBarH1" onClick={() => navigate('/works')}>
              Works
            </h1>
          </div>
          <div className="optionContainer">
            <h1 className="sideBarH1" onClick={() => navigate('/contact')}>
              Contact
            </h1>
          </div>
        </div>
        <div className="ContainerLanguages">coming soon</div>
      </div>
    </>
  );
};
export default SideBarMobile;
