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
            <h3 className="h3Information">{interfaceLanguage?.aboutDesc}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
