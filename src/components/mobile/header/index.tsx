import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
const HeaderMobile = () => {
  let navigate = useNavigate();
  return (
    <>
      <header className="headercontainerMobile">
        <div onClick={() => navigate('/')} className="letterRContainerMobile">
          <span className="letterRmobile">R</span>
        </div>
        <div className="containerOptionsMobile">≡</div>
      </header>
    </>
  );
};

export default HeaderMobile;
