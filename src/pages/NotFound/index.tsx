import './index.css';
import * as notFound from '../../public/404.svg';
import { useNavigate } from 'react-router-dom';
const NotFoundPage = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="notFoundContainer">
        <img
          src={notFound.default}
          alt="404Page"
          className="image404"
          draggable="false"
        />
        <h1 className="h1BackToHome" onClick={() => navigate('/')}>
          ← Go to homepage
        </h1>
      </div>
    </>
  );
};

export default NotFoundPage;
