import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';


const Product = () => {

    return (
        <div className=" flex flex-col justify-center min-h-screen max-w-full py-6 gap-5 overflow-x-hidden mx-3">
            <div className="">
                <ProductForm/>
            </div>
            <div className="px-3 bg-white rounded-lg">
                <ProductTable />
            </div>
        </div>
    );
};

export default Product;