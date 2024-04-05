import React, { useState } from 'react';
import SupplierForm from '../components/SupplierForm';
import SupplierTable from '../components/SupplierTable';

const Supplier = () => {
    const [suppliers, setSuppliers] = useState([]);

    const addSupplier = (newSupplier) => {
        setSuppliers([...suppliers, newSupplier]);
    };

    return (
        <div className=" flex justify-center py-6 min-h-screen max-w-full ">
        <div className="basis-1/3">
                <SupplierForm addSupplier={addSupplier} />
                </div>
                <div className="basis-2/3 pr-6">
                <SupplierTable suppliers={suppliers} />
                </div>
        
        </div>
    );
};

export default Supplier;