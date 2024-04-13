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
    const [data, setData] = useState([]);
    const [editID, setEditID] = useState();
    const [FormSubmitted, setFormSubmitted] = useState(0);

    const fetchSuppliersData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/supplierData");
            setData(res.data);
        } catch (error) {
            console.log("Error fetching suppliers:", error);
        }
    };

    useEffect(() => {
            fetchSuppliersData().then(r => console.log("Supplier data fetched"));
        }, [FormSubmitted]
    );


    const handleClickEdit = (index) => {
        setEditID(index);
        console.log("Edit ID:", index);
    }


    return (
    <div className="flex justify-center py-6 min-h-screen max-w-full">
      <div className="basis-1/3">
        <SupplierForm editID={editID} setFormSubmitted={setFormSubmitted}/>
      </div>
      <div className="basis-2/3 pr-6">
        <SupplierTable data={data} handleClickEdit={handleClickEdit} />
      </div>
    </div>
  );
};

export default Supplier;
