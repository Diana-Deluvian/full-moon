import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loader from '../sharedComponents/Loader';

import PrivateRoute from './PrivateRoute';

import LandingPage from '../components/LandingPage';
import Login from '../components/Login';

import Home from '../components/Home';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/private'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
