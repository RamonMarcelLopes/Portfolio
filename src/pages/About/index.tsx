import './index.css';
import Header from '../../components/HeaderToBack';
import { useLanguageContext } from '../../contexts/language';
import HeaderMobile from '../../components/mobile/header';
const About = () => {
  let { interfaceLanguage } = useLanguageContext() ?? {};
  return (
    <>
      <HeaderMobile />
      <Header />
      <div className="AboutContainer">
        <div className="AboutTitleContainer">
          <h1 className="About">{interfaceLanguage?.about}</h1>
        </div>
        <div className="ImageAndInformationContainer">
          <div className="ImageContainer">
            <div className="imgTracado">
              <img
                src="https://jacaimages.vercel.app/imgs/miscellaneous/ramon.jpeg"
                alt=""
                className="My-img"
              />
            </div>
          </div>
          <div className="informationContainer">
            <h1>Lore ipsum</h1>
            <h3 className="h3Information">
              Lorem ipsum dolor sit amet consectetur. Urna sed eu felis sagittis
              etiam id. Mattis fermentum congue odio etiam duis in. Elementum
              nibh fames amet nunc. Amet tellus tortor lacus volutpat consequat
              adipiscing urna consectetur vehicula. Duis turpis et semper mauris
              at. Facilisis erat pharetra quam fusce auctor cras feugiat.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
