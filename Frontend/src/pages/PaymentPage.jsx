import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Payment from '../components/Payment';

function PaymentPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <Payment />
      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;