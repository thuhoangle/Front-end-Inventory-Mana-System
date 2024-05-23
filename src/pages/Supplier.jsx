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
        <div className="min-h-screen min-w-screen mx-3 pr-2">
    <div className="flex flex-wrap flex-col md:flex-row  py-6">
      <div className="md:basis-1/3">
        {/*<div className={'w-fit md:w-1/3 '}>*/}
        <SupplierForm/>
      </div>
      <div className=" md:basis-2/3">
      {/*  <div className={'w-full '}>*/}
        <SupplierTable/>
      </div>
    </div>
        </div>
  );
};

export default Supplier;
