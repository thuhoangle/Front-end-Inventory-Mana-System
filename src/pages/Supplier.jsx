import SupplierForm from "../components/SupplierForm";
import SupplierTable from "../components/SupplierTable";

const Supplier = () => {


    return (
        <div className="min-h-screen min-w-screen mx-3 pr-2">
    <div className="flex flex-wrap flex-col md:flex-row  py-6">
      <div className="md:basis-1/3">
        {/*<div className={'w-fit md:w-1/3 '}>*/}
        <SupplierForm/>
      </div>
      <div className=" md:basis-2/3">
      {/*  <div className={'w-full '}>*/}
        <SupplierTable/>
      </div>
    </div>
        </div>
  );
};

export default Supplier;
