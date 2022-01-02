import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom';
import Loader from '../sharedComponents/Loader';

import Login from '../components/Login';

import PrivateRoute from './PrivateRoute';
import LandingPage from '../components/LandingPage';
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
