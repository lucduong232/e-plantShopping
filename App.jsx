import React from 'react';
import './App.css'; // Gọi file CSS ở bài trước để lấy hình nền

function App() {
  return (
    // Lớp "landing-page" này sẽ được nhận hình nền từ file App.css
    <div className="landing-page">
      <div className="content">
        {/* Tên công ty */}
        <h1>Paradise Nursery</h1>
        
        <p>Chào mừng bạn đến với vườn ươm tuyệt đẹp của chúng tôi!</p>
        
        {/* Nút bấm Get Started theo đúng yêu cầu */}
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
}

export default App;
