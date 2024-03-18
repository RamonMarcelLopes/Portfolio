import { NavigateFunction, useNavigate } from 'react-router-dom';
import Header from '../../components/HeaderToBack';
import './index.css';
import { useState } from 'react';
import { useLanguageContext } from '../../contexts/language';
import HeaderMobile from '../../components/mobile/header';

const Home = () => {
  let { interfaceLanguage } = useLanguageContext() ?? {};
  let navigate: NavigateFunction = useNavigate();
  return (
    <>
      <HeaderMobile />
      <Header />
      <div className="HomeContainer">
        <div className="containerInformation">
          <div className="textInf">
            <div className="phraseHello">
              <span>{interfaceLanguage?.helloText} </span>
            </div>
            <div className="containerNameHome">
              <h1 className="NameH1">Ramon Lopes</h1>
            </div>
            <div className="containerStack">
              <h2>{interfaceLanguage?.stackText}</h2>
            </div>
            <div className="containerInformationText">
              <h3 className="h3AboutInformation">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                finibus fermentum nisi aliquam eleifend. Nunc metus arcu,
                pretium vitae lorem et, fringilla placerat nunc. Pellentesque
                condimentum commodo imperdiet. Nam volutpat augue tortor, nec
              </h3>
            </div>
            <div className="containerButton">
              <button
                className="meetButton"
                onClick={() => navigate('/contact')}
              >
                {interfaceLanguage?.meetMe}
              </button>
            </div>
          </div>
          <div className="image">
            <div className="boxShadow">
              <img
                className="myimage"
                src="https://jacaimages.vercel.app/imgs/miscellaneous/peackyblinder.png"
                alt="imagem do Ramon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
