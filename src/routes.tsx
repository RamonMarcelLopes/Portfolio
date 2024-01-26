import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import SecPage from './pages/SecPage/secPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hello" element={<SecPage />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
