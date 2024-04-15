import React, { useState, useEffect } from "react";
import SupplierForm from "../components/SupplierForm";
import SupplierTable from "../components/SupplierTable";
import axios from "axios";

const Supplier = () => {
    // const [data, setData] = useState([]);
    // const [suppliername, setSupplierName] = useState();
    // const [formSubmitted, setFormSubmitted] = useState(0);

    // const fetchSuppliersData = async () => {
    //     try {
    //         const res = await axios.get("https://luoi-lot-ca-pf3yfmx32q-de.a.run.app/typye/supplier");
    //         setData(res.data);
    //     } catch (error) {
    //         console.log("Error fetching suppliers:", error);
    //     }
    // };

    // useEffect(() => {
    //         fetchSuppliersData().then(r => console.log("Supplier data fetched"));
    //     }, [formSubmitted]
    // );






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
