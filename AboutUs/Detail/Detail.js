import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { adId } = useParams();
  const [curAd, setCurAd] = useState(null);

  useEffect(() => {
    getCurAd();
  }, [adId]); 

  const getCurAd = () => {
    fetch(`https://fakestoreapi.com/products/:${adId}`)
      .then((res) => res.json())
      .then((res) => setCurAd(res))
      .catch((error) => console.error("Error fetching ad:", error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
        {!curAd ? (
          <h2>Loading.........</h2>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">{curAd.title}</h2>
            <img
              src={curAd.thumbnail}
              alt={curAd.title}
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold">${curAd.price}</h3>
            <p className="text-gray-600">{curAd.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
