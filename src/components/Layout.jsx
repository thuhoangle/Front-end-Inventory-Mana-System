import Dashboard from "../pages/Dashboard";
import Header from "./Header";
import Product from "../pages/Product";
import Supplier from "../pages/Supplier";
import Order from "../pages/Order";
import {SideBar} from "./index.js";
import {Inventory} from "../pages/index.js";
import Export from "../pages/Export.jsx";
import ExportHistory from "../pages/ExportHistory.jsx";

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
                <Export/>
                <ExportHistory/>
            </div>            

        </div>
    )
};

export default Layout;