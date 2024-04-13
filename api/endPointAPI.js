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