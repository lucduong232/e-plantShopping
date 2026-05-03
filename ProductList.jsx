import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Nhập hàm addItem từ file CartSlice bạn làm ở bài trước

function ProductList() {
  const dispatch = useDispatch();
  
  // State để theo dõi những sản phẩm nào đã được thêm vào giỏ hàng
  const [addedToCart, setAddedToCart] = useState({});

  // Dữ liệu mẫu về các cây cảnh, chia theo danh mục
  const plantsArray =[
    {
      category: "Air Purifying Plants",
      plants:[
        { id: 1, name: "Snake Plant", price: 15, image: "https://example.com/snake-plant.jpg", description: "Lọc không khí tốt." },
        { id: 2, name: "Spider Plant", price: 12, image: "https://example.com/spider-plant.jpg", description: "Dễ chăm sóc." },
      ]
    },
    {
      category: "Aromatic Plants",
      plants:[
        { id: 3, name: "Lavender", price: 20, image: "https://example.com/lavender.jpg", description: "Mùi hương thư giãn." },
        { id: 4, name: "Mint", price: 10, image: "https://example.com/mint.jpg", description: "Tuyệt vời để pha trà." },
      ]
    }
  ];

  // Hàm xử lý khi bấm nút "Add to Cart"
  const handleAddToCart = (plant) => {
    // Gọi hàm addItem để đưa sản phẩm vào giỏ hàng (Redux)
    dispatch(addItem(plant));
    
    // Cập nhật state để đổi nút thành "Added"
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.id]: true, 
    }));
  };

  return (
    <div className="product-list-container">
      <h2>Our Plants</h2>
      
      {/* Vòng lặp in ra các danh mục */}
      {plantsArray.map((categoryObj, index) => (
        <div key={index}>
          <h3>{categoryObj.category}</h3>
          
          {/* Vòng lặp in ra từng cây trong danh mục đó */}
          <div className="plant-grid" style={{ display: 'flex', gap: '20px' }}>
            {categoryObj.plants.map((plant) => (
              <div key={plant.id} className="plant-card" style={{ border: '1px solid #ccc', padding: '10px' }}>
                <img src={plant.image} alt={plant.name} style={{ width: '150px', height: '150px' }} />
                <h4>{plant.name}</h4>
                <p>{plant.description}</p>
                <p>Price: ${plant.price}</p>
                
                {/* Nút bấm chuyển đổi trạng thái khi đã click */}
                <button 
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.id]} // Vô hiệu hóa nếu đã thêm
                  style={{
                    backgroundColor: addedToCart[plant.id] ? 'grey' : 'green',
                    color: 'white',
                    padding: '10px',
                    cursor: addedToCart[plant.id] ? 'not-allowed' : 'pointer'
                  }}
                >
                  {addedToCart[plant.id] ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
