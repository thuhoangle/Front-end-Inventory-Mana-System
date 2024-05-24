import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  Dashboard,
  Inventory,
  Order,
  Product,
  Supplier,
  Login,
  SignUp,
  Warning,
} from "./pages/index.js";
import PageLayout from "./PageLayout.jsx";
import Export from "./pages/Export.jsx";
import ExportHistory from "./pages/ExportHistory.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import withAuthorization from "./pages/withAuthorization.jsx";

const App = () => {

  const AuthorizedExport = withAuthorization(Export, ["ADMIN"]);
  const AuthorizedExportHistory = withAuthorization(ExportHistory, ["ADMIN"]);


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
<Route path="/warning" element={<Warning />} />

     <Route path='/export' element={<AuthorizedExport />} />
        <Route path='/export-history' element={<AuthorizedExportHistory />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
