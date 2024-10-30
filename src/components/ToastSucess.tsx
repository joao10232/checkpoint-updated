import React from 'react';
import { ToastContainer } from 'react-toastify';

const CustomToastContainer: React.FC = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      // transition={Bounce} // Se precisar usar, descomente e importe o Bounce
    />
  );
};

export default CustomToastContainer;
