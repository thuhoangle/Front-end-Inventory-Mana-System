// endPointAPI.js
const BASE_URL = 'https://luoi-lot-ca-pf3yfmx32q-de.a.run.app';


//Inventory
export const INVENTORY_TOTAL_PRODUCTS = `${BASE_URL}/typye/overal/totalProduct`;
export const INVENTORY_TOP_SELLING = `${BASE_URL}/typye/overal/topselling`;
export const INVENTORY_CATEGORIES = `${BASE_URL}/nesgnas/countCatalog`;
export const INVENTORY_LOW_STOCKS = `${BASE_URL}/nesgnas/countLowStock`;

//Supplier

export const SUPPLIER_DATA = `${BASE_URL}/typye/supplier`;

//Product

export const PRODUCT_DATA = `${BASE_URL}/typye/product`;

//Dashboard

export const DASHBOARD_ORDER_DATA = `${BASE_URL}/typye/home/order`;
export const DASHBOARD_LIST_LOW_QUANTITY = `${BASE_URL}/nesgnas/listLowQuantity`;
export const DASHBOARD_CATEGORIES_DATA = `${BASE_URL}/typye/home/category`;
export const DASHBOARD_PRODUCTS_DATA = `${BASE_URL}/nesgnas/countProduct`;

//Order

export const ORDER_LIST = `${BASE_URL}/typye/order`;