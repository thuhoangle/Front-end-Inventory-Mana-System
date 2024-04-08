import React, { useState, useEffect } from "react";
import SupplierForm from "../components/SupplierForm";
import SupplierTable from "../components/SupplierTable";
import axios from "axios";

// eslint-disable-next-line no-undef
//const express = require("express");
// const app = express();
//   app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "Content-Type",
//       "Authorization"
//     );
//     next();
//   });
const Supplier = () => {
  return (
    <div className="flex justify-center py-6 min-h-screen max-w-full">
      <div className="basis-1/3">
        <SupplierForm/>
      </div>
      <div className="basis-2/3 pr-6">
        <SupplierTable/>
      </div>
    </div>
  );
};

export default Supplier;
