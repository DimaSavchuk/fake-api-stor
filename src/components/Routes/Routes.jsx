import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTER } from '../../utils/routes';

import Home from '../Home/Home';
import WithCategory from '../WithCategory/WithCategory';
import SingleProduct from '../SingleProduct/SingleProduct';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME} element={<Home />} />
      <Route path={ROUTER.CATEGORY} element={<WithCategory />} />
      <Route path={ROUTER.SINGLEPRODUCTS} element={<SingleProduct />} />
    </Routes>
  );
};

export default AppRoutes;
