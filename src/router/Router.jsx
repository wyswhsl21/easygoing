import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../page/Landing';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};

export default Router;
