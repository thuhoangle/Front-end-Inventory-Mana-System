import React, { useState } from 'react';

const Warning = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center relative">
          <h1 className="text-2xl font-bold mb-4">Warning</h1>
          <p className="text-gray-700">You do not have permission to access this page.</p>
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 bg-red-500 text-red text-xl rounded-full h-8 w-8 flex items-center justify-center"
          >
            &times;
          </button>
        </div>
      </div>
    )
  );
};

export default Warning;
