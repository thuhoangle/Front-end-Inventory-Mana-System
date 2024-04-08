import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';

const Product = () => {

    return (
        <div className=" flex justify-center min-h-screen max-w-full py-6">
        <div className="basis-1/3">
            <ProductForm/>
        </div>
        <div className="basis-2/3 pr-6">
            <ProductTable/>
        </div>
        </div>
    );
};

export default Product;