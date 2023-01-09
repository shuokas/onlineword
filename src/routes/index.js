import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/content-main";
import Header from "../pages/content-header";

const BasicRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact={true} path="/" element={<Home />} />
      <Route exact={true} path="/detail" element={<Header />} />
    </Routes>
  </BrowserRouter>
);

export default BasicRoutes;
