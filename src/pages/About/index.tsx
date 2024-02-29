import './index.css';
import Header from '../../components/HeaderToBack';
import { useLanguageContext } from '../../contexts/language';
const About = () => {
  let { interfaceLanguage } = useLanguageContext() ?? {};
  return (
    <>
      <Header />
      <div className="AboutContainer">
        <div className="AboutTitleContainer">
          <div className="tracado"></div>
          <h1 className="About">{interfaceLanguage?.about}</h1>
          <div className="tracado"></div>
        </div>
        <div className="ImageAndInformationContainer">
          <div className="ImageContainer">
            <div className="imgTracado">
              <img
                src="https://jacaimages.vercel.app/imgs/miscellaneous/peackyblinder.png"
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
              Blandit curabitur ut elit viverra luctus montes morbi elementum
              leo. Adipiscing cras nec diam bibendum ullamcorper sed turpis.
              Nibh potenti mauris adipiscing fermentum fermentum vehicula diam
              vitae lectus.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
