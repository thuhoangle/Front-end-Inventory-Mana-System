import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';

const Product = () => {
    const [products, setProducts] = useState([]);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div className=" flex justify-center min-h-screen max-w-full py-6">
        <div className="basis-1/3">
            <ProductForm addProduct={addProduct}/>
        </div>
        <div className="basis-2/3 pr-6">
                <ProductTable products={products}/>

        </div>
        </div>
    );
};

export default Product;