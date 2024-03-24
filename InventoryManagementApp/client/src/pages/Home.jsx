import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer'; // Import the Footer component

const Home = () => {
  return (
    <div className="bg-custom-bg min-h-screen rounded-lg shadow-md p-10">
      <div className="grid grid-cols-2 gap-6 mt-20 ml-10">
        <div className="col-span-1">
          <div className="mb-6">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-custom-blue">wd</span>
              <span>inv</span>
            </h1>
            <p className="text-gray-600 text-6xl">Effortless Inventory Control Awaits</p>
          </div>
          <p className="text-gray-700">
            Simplify your stock control with WDInv, the intuitive inventory
            management solution. Enjoy real-time tracking, streamlined ordering, and
            actionable insights-all in one place. Get ready to elevate your
            inventory efficiency.
          </p>
        </div>
        <div className="col-span-1">
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
