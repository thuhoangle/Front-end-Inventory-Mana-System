import Dashboard from "../pages/Dashboard";
import Menu from "./Menu"
import Header from "./Header";
import Product from "../pages/Product";
import Supplier from "../pages/Supplier";
import Order from "../pages/Order";

const Layout = () => {
    return (
        <div className="flex">
            <div className=" h-screen ">
                <Menu/>
            </div>
            <div className=" h-full w-full ">
                <Header/>
                <Order/>
                {/* <Product/> */}
                {/* <Supplier/> */}
                {/* <Dashboard/> */}
            </div>            

        </div>
    )
};

export default Layout;