import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import SideBarMobile from '../sidebar';
const HeaderMobile = () => {
  let navigate = useNavigate();
  const [isActive, setIsActive] = useState('active');
  let handleClickSidebar = () => {
    setIsActive('active');
  };
  let handleCloseSideBar = (data: string) => {
    setIsActive(data);
  };

  return (
    <>
      <div className={`sideBar ${isActive}`}>
        <SideBarMobile close={handleCloseSideBar} />
      </div>
      <header className="headercontainerMobile">
        <div onClick={() => navigate('/')} className="letterRContainerMobile">
          <span className="letterRmobile">R</span>
        </div>
        <div className="containerOptionsMobile" onClick={handleClickSidebar}>
          ≡
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
