import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';


const Product = () => {

    return (
        <div className="flex flex-col min-h-screen min-w-screen mx-3 pr-2 gap-5 overflow-x-hidden">
            <div className="pt-5">
                <ProductForm/>
            </div>
            <div className="px-3 bg-white rounded-lg">
                <ProductTable />
            </div>
        </div>
    );
};

export default Product;