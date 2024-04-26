import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteDialog from "./btn/DeleteDialog.jsx";
import { Button } from "@chakra-ui/react";

import { PRODUCT_DATA } from "../../api/endPointAPI.js";

const ProductTable = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(PRODUCT_DATA);
        setProductsData(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const intervalId = setInterval(fetchProducts, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const deleteProduct = async (pid) => {
    try {
      // Perform delete operation
      await axios.delete(`${PRODUCT_DATA}/${pid}`);
      // Optionally, you can also update the suppliersData state after successful delete
      const updatedProducts = productsData.filter(
        (product) => product.pid !== pid
      );
      setProductsData(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="w-[1200px] h-[66px] border rounded-[10px] bg-white px-5 justify-start items-center inline-flex">
        <div className="text-black text-2xl font-semibold font-['Inter'] leading-9">
          Product List
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <div className="self-stretch justify-center items-center gap-2.5 flex">
              <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">
                SKU
              </div>
            </div>
            <div className="self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">
                Product name
              </div>
            </div>
            <div className="self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">
                Category
              </div>
            </div>
            <div className="self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">
                Supplier
              </div>
            </div>
            <div className="self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">
                Buying price
              </div>
            </div>
            <div className="self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">
                Selling price
              </div>
            </div>
            <div className="self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">
                Action
              </div>
            </div>
          </tr>
        </thead>
        <tbody className="bg-white">
          {productsData.map((product, index) => (
            <tr key={index}>
          
            <div className="absolute justify-start items-center inline-flex">
              <div className="w-20 self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">{product.pid}</div>
              </div>
              <div className="w-[215px] self-stretch justify-center items-center gap-2.5 flex">
                <div className="text-zinc-600 text-xl font-normal font-['Inter'] leading-[30px]">{product.pname}</div>
              </div>
              <div className="w-[143px] self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">{product.category}</div>
              </div>
              <div className="w-[143px] self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">{product.suppliername}</div>
              </div>
              <div className="w-[143px] self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">${product.costprice}</div>
              </div>
              <div className="w-[143px] self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-zinc-600 text-xl font-medium font-['Inter'] leading-[30px]">${product.sellingprice}</div>
              </div>
              <div className="w-[198px] self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-[106px] px-3.5 py-2 bg-blue-600 rounded-lg shadow border border-blue-600 justify-center items-center gap-2 inline-flex">
                  <div className="text-neutral-50 text-sm font-semibold font-['Inter'] leading-tight">Edit</div>
                </div>
                <div className="w-[106px] px-3.5 py-2 bg-red-600 rounded-lg shadow border border-red-600 justify-center items-center gap-2 inline-flex">
                  <div className="text-neutral-50 text-sm font-semibold font-['Inter'] leading-tight">Delete</div>
                </div>
              </div>
        
          </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
