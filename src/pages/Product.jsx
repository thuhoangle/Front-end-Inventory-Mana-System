import React, {useEffect, useState} from 'react';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';
import axios from "axios";

import { PRODUCT_DATA } from '../../api/endPointAPI';
import {DataTable} from "../components/index.js";
import DataTable2 from "../components/DataTable2.jsx";

const Product = () => {
    // const [data, setData] = useState([]);
    // const [editID, setEditID] = useState();
    // const [FormSubmitted, setFormSubmitted] = useState(0);

    // const fetchProductData = async () => {
    //     try {
    //         const res = await axios.get(PRODUCT_DATA);
    //         setData(res.data);
    //     } catch (error) {
    //         console.log("Error fetching products:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchProductData().then(r => console.log("products data fetched"));
    //     }, [FormSubmitted]
    // );


    // const handleClickEdit = (index) => {
    //     setEditID(index);
    //     console.log("Edit ID:", index);
    // }


    return (
        <div className=" flex flex-col justify-center min-h-screen max-w-full py-6 gap-5 overflow-x-hidden mx-3">
            <div className="">
                <ProductForm/>
            </div>
            <div className="px-3 bg-white rounded-lg">
                <DataTable2 />
            </div>
        </div>
    );
};

export default Product;