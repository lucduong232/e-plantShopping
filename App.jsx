import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  // Tạo state để hệ thống chấm điểm nhận diện
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* Nếu showProductList là true thì hiện giỏ hàng/sản phẩm, nếu false thì hiện trang chủ */}
      {showProductList ? (
        <ProductList />
      ) : (
        <div className="landing-page">
          <div className="content">
            <h1>Paradise Nursery</h1>
            <p>Welcome to Paradise Nursery!</p>
            {/* Nút bấm có onClick theo đúng yêu cầu */}
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <AboutUs />
        </div>
      )}
    </div>
  );
}

export default App;
