import { NavigateFunction, useNavigate } from 'react-router-dom';
import Header from '../../components/HeaderToBack';
import './index.css';

const Home = () => {
  let navigate: NavigateFunction = useNavigate();

  return (
    <>
      <Header />
      <div className="HomeContainer">
        <div className="containerInformation">
          <div className="textInf">
            <div className="phraseHello">
              <span>Hello, my name is </span>
            </div>
            <div className="containerNameHome">
              <h1>Ramon Lopes</h1>
            </div>
            <div className="containerStack">
              <h2>A full-stack developer</h2>
            </div>
            <div className="containerInformationText">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                venenatis purus, pellentesque tempor justo. Proin molestie
                tellus vitae scelerisque lobortis. Aenean semper lacus nec massa
                bibendum, nec cursus turpis finibus. Duis malesuada vel est id
                faucibus. Etiam euismod condimentum augue sed ultrices. Vivamus
                mollis venenatis consequat. Proin nec felis ornare, tincidunt
                tortor eget, dictum arcu. Proin rhoncus quam vitae erat
                vestibulum, sed accumsan ante vulputate. Aenean ullamcorper
                vitae nisi non gravida. Aenean posuere tortor sit amet euismod
                finibus. Phasellus viverra risus ante. Proin nec ipsum
                efficitur, ultricies metus nec, tristique purus.
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
