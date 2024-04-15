import React, {useEffect, useState} from 'react';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';
import axios from "axios";

const Product = () => {
    const [data, setData] = useState([]);
    const [editID, setEditID] = useState();
    const [FormSubmitted, setFormSubmitted] = useState(0);

    const fetchProductData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/productData");
            setData(res.data);
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProductData().then(r => console.log("products data fetched"));
        }, [FormSubmitted]
    );


    const handleClickEdit = (index) => {
        setEditID(index);
        console.log("Edit ID:", index);
    }


    return (
        <div className=" flex justify-center min-h-screen max-w-full py-6">
        <div className="basis-1/3">
            <ProductForm editID={editID} setFormSubmitted={setFormSubmitted}/>
        </div>
        <div className="basis-2/3 pr-6">
            <ProductTable data={data} handleClickEdit={handleClickEdit}/>
        </div>
        </div>
    );
};

export default Product;