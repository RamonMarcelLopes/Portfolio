import { NavigateFunction, useNavigate } from 'react-router-dom';
import Header from '../../components/HeaderToBack';
import './index.css';
import * as L from './language';
import { useState } from 'react';

const Home = () => {
  let navigate: NavigateFunction = useNavigate();
  const en = L.textsEN;
  const pt = L.TextsPT;

  let [language, setLanguage] = useState<L.texts>(en);

  return (
    <>
      <Header />
      <div className="HomeContainer">
        <div className="containerInformation">
          <div className="textInf">
            <div className="phraseHello">
              <span>{language.helloText} </span>
            </div>
            <div className="containerNameHome">
              <h1>Ramon Lopes</h1>
            </div>
            <div className="containerStack">
              <h2>{language.stackText}</h2>
            </div>
            <div className="containerInformationText">
              <h3 className="h3AboutInformation">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                finibus fermentum nisi aliquam eleifend. Nunc metus arcu,
                pretium vitae lorem et, fringilla placerat nunc. Pellentesque
                condimentum commodo imperdiet. Nam volutpat augue tortor, nec
                commodo nisl cursus sit amet. Nulla at vulputate justo. Sed
                vitae nibh pulvinar, lacinia ex vestibulum, feugiat neque. Duis
                ullamcorper efficitur fermentum. Duis et ultrices orci. Cras
                euismod sapien vehicula erat egestas lobortis. Quisque dictum
              </h3>
            </div>
            <div className="containerButton">
              <button
                className="meetButton"
                onClick={() => navigate('/contact')}
              >
                meet me
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
