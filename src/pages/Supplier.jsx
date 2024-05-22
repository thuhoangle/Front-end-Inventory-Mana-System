import SupplierForm from "../components/SupplierForm";
import SupplierTable from "../components/SupplierTable";

const Supplier = () => {


    return (
    <div className="flex justify-center py-6 min-h-screen max-w-full">
      <div className="basis-1/3">
        <SupplierForm/>
      </div>
      <div className="basis-2/3 pr-6">
        <SupplierTable/>
      </div>
    </div>
  );
};

export default Supplier;
