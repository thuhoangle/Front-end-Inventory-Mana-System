import { useEffect, useState } from "react";
import { DataTable, Header } from "../components/index.js";
import { Card } from "antd";

//import API
import { INVENTORY_TOTAL_PRODUCTS, INVENTORY_CATEGORIES, INVENTORY_LOW_STOCKS, INVENTORY_TOP_SELLING } from "../../api/endPointAPI.js";

const Inventory = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [categories, setCategories] = useState(0);
  const [topSelling, setTopSelling] = useState(0);
  const [lowStocks, setLowStocks] = useState(0);


  useEffect(() => {
    // Fetch total products from your API
    fetchTotalProducts();
    fetchCategories();
    fetchTopSelling();
    fetchLowStocks();
  }, []);

  const fetchTotalProducts = () => {
    // Replace 'yourApiEndpoint' with your actual API endpoint
    fetch(INVENTORY_TOTAL_PRODUCTS,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalProducts(data.totalproductofspecificwarehouse);
        console.table(data.totalproductofspecificwarehouse);
      })
      .catch((error) => {
        console.error("Error fetching total products:", error);
      });
  };

  const fetchCategories = () => {
    fetch(INVENTORY_CATEGORIES,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.total_product_category_associations);
        console.table(data.total_product_category_associations);
      })
      .catch((error) => {
        console.error("Error fetching total products:", error);
      });
  };

  const fetchTopSelling = () => {
    fetch(INVENTORY_TOP_SELLING,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTopSelling(data.top_selling);
        console.table(data.top_selling);
      })
      .catch((error) => {
        console.error("Error fetching total products:", error);
      });
  };

  const fetchLowStocks = () => {
    fetch(INVENTORY_LOW_STOCKS,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLowStocks(data.low_qquantity_stock);
        console.table(data.low_qquantity_stock);
      })
      .catch((error) => {
        console.error("Error fetching total products:", error);
      });
  };

  return (
    <div>
      <div className={"bg-white rounded-lg mx-3 mt-5"}>
        <div className={"flex flex-col gap-3 pt-2"}>
          <div className={"flex flex-row justify-between "}>
            <p className={"pl-3 text-3xl font-bold "}>Overall inventory</p>
            <form className="mr-2">
              <select
                id="time"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-gray-300 block w-full p-2.5"
              >
                <option selected value="monnth">
                  Monthly
                </option>
                <option value="weekly">Weekly</option>
                <option value="daily">Daily</option>
              </select>
            </form>
          </div>

          <div className={"flex flex-wrap items-center justify-center px-5"}>
            <div className={"w-1/4 bg-white text-blue font-semibold"}>
              <p className="text-3xl">Categories</p>
              <p className="text-4xl">{categories}</p>
            </div>

            <div className={"w-1/4 bg-white text-blue font-semibold"}>
              <p className="text-3xl">Total products</p>
              <p className="text-4xl">{totalProducts}</p>
            </div>

            <div className={"w-1/4 bg-white text-green font-semibold"}>
              <p className="text-3xl">Top selling</p>
              <p className="text-4xl">{topSelling}</p>
            </div>

            <div className={"w-1/4 bg-white text-red font-semibold"}>
              <p className="text-3xl">Low stocks</p>
              <p className="text-4xl">{lowStocks}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg-white rounded-lg p-2 mt-2 mx-3"}>
        <DataTable />
      </div>
    </div>
  );
};

export default Inventory;
