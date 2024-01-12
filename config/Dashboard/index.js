import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  function getApi() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) =>
        setProducts(
          res.map((product) => ({ ...product, isHeartFilled: false }))
        )
      );
  }

  const toggleHeart = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isHeartFilled: !product.isHeartFilled }
          : product
      )
    );
  };

  if (!products.length) {
    return <h1>Loading.......</h1>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((item) => (
        <div
          key={item.id}
          className="border-2 w-80 mx-4 my-8 p-4 flex flex-col transition duration-300 hover:bg-gray-100 hover:border-blue-500 hover:text-black"
        >
          <div>
            <img
              className="w-40 h-40 mx-auto mb-4"
              src={item.image}
              alt="product-image"
            />
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">$ {item.price}</h2>
              <button
                onClick={() => toggleHeart(item.id)}
                className="text-xl text-red-500"
              >
                {item.isHeartFilled ? (
                  <i className="fa-solid fa-heart"></i>
                ) : (
                  <i className="fa-regular fa-heart"></i>
                )}
              </button>
            </div>
            <div className="text-center">
              <h5 className="text-lg font-semibold mb-1">{item.title}</h5>
              <p className="text-sm font-semibold mb-4 overflow-hidden line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
          <div className="mt-auto text-center">
            <button
              onClick={() => navigate(`/AboutUs/Detail/${item.id}`)}
              className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-white hover:border-blue-500 hover:text-black"
            >
              View detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
