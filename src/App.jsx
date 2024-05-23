import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import {
  Dashboard,
  Inventory,
  Order,
  Product,
  Supplier,
  Login,
  SignUp,
} from "./pages/index.js";
import PageLayout from "./PageLayout.jsx";
import Export from "./pages/Export.jsx";
import ExportHistory from "./pages/ExportHistory.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
   
        <Route path='' element={<PrivateRoute/>}>
        <Route element={<PageLayout />}>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/inventory' element={<Inventory/>} />
              <Route path='/supplier' element={<Supplier/>} />
              <Route path='/product' element={<Product/>} />
              <Route path='/order' element={<Order/>} />
              <Route path='/export' element={<Export/>} />
              <Route path='/export-history' element={<ExportHistory/>} />
            </Route>
 </Route>
    </Routes>
  );
}

export default App;
