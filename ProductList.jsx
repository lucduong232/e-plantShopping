import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  // Yêu cầu: Có ít nhất 6 cây và nhiều danh mục
  const plantsArray =[
    {
      category: "Air Purifying Plants",
      plants:[
        { id: 1, name: "Snake Plant", price: 15, image: "https://example.com/snake.jpg" },
        { id: 2, name: "Spider Plant", price: 12, image: "https://example.com/spider.jpg" },
      ]
    },
    {
      category: "Aromatic Plants",
      plants:[
        { id: 3, name: "Lavender", price: 20, image: "https://example.com/lavender.jpg" },
        { id: 4, name: "Mint", price: 10, image: "https://example.com/mint.jpg" },
      ]
    },
    {
      category: "Insect Repellent Plants",
      plants:[
        { id: 5, name: "Aloe Vera", price: 18, image: "https://example.com/aloe.jpg" },
        { id: 6, name: "Basil", price: 14, image: "https://example.com/basil.jpg" },
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.id]: true,
    }));
  };

  return (
    <div>
      {/* YÊU CẦU: NAVBAR có Home, Plants, Cart */}
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#4CAF50', color: 'white' }}>
        <div className="nav-logo">
          <h3>Paradise Nursery</h3>
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Plants</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Cart</a>
        </div>
      </nav>

      <div className="product-list-container" style={{ padding: '20px' }}>
        <h2>Our Plants</h2>
        {plantsArray.map((categoryObj, index) => (
          <div key={index}>
            <h3>{categoryObj.category}</h3>
            <div className="plant-grid" style={{ display: 'flex', gap: '20px' }}>
              {categoryObj.plants.map((plant) => (
                <div key={plant.id} className="plant-card" style={{ border: '1px solid #ccc', padding: '10px' }}>
                  <img src={plant.image} alt={plant.name} style={{ width: '150px', height: '150px' }} />
                  <h4>{plant.name}</h4>
                  <p>Price: ${plant.price}</p>
                  <button 
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.id]}
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
    </div>
  );
}

export default ProductList;
