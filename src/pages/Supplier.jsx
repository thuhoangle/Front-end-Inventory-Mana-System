import React, { useState } from 'react';
import SupplierForm from '../components/SupplierForm';
import SupplierTable from '../components/SupplierTable';

const Supplier = () => {
    const [suppliers, setSuppliers] = useState([]);

    const addSupplier = (newSupplier) => {
        setSuppliers([...suppliers, newSupplier]);
    };

    return (
        <div className=" flex justify-center p-6 min-h-screen max-w-full gap-10 ">
                <SupplierForm addSupplier={addSupplier} />
                <SupplierTable suppliers={suppliers} />
        
        </div>
    );
};

export default Supplier;