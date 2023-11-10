import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PayPalButton from './components/PaypalButton';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<PayPalButton />} />
      </Routes>
    </>
  );
};

export default App;
