import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
    const { adId } = useParams();
    const [curAd, setCurAd] = useState(null);

    useEffect(() => {
        getCurAd();
    }, []);

    const getCurAd = () => {
        fetch(`https://fakestoreapi.com/products/${adId}`)
            .then(res => res.json())
            .then(res => setCurAd(res));
    };

    return (
        <div>
            {!curAd ? (
                <h2>Loading.........</h2>
            ) : (
                <div>
                    <h2>{curAd.title} </h2>
                    <img src={curAd.thumbnail} alt={curAd.title} />
                    <h3>${curAd.price} </h3>
                    <p>{curAd.description} </p>
                </div>
            )}
        </div>
    );
}

export default Detail;
