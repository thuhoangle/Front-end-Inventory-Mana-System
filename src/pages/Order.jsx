
import OrderTable from '../components/OrderTable.jsx';
const Order = () => {

    return (
        <div className=" flex flex-col justify-center min-h-screen max-w-full gap-5 overflow-x-hidden mx-3">
            <div className="">
                <OrderTable/>
            </div>
        </div>
    );
};

export default Order;
