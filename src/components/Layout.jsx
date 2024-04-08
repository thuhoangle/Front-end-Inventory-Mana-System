import Dashboard from "../pages/Dashboard";
import Header from "./Header";
import Product from "../pages/Product";
import Supplier from "../pages/Supplier";
import Order from "../pages/Order";
import {SideBar} from "./index.js";
import {Inventory} from "../pages/index.js";

const Layout = () => {
    return (
        <div className="flex">
            <div className=" h-screen w-full ">
                <SideBar/>
            </div>
            <div className=" h-full w-full ">
                <Header/>
                <Order/>
                 <Product/>
                 <Supplier/>
                 <Dashboard/>
                <Inventory/>
            </div>            

        </div>
    )
};

export default Layout;