import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../LandingPage';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
