import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
function ShopComponent() {
  const [products, setProducts] = useState([]);
  const [isStillLoading, setIsStillLoading] = useState(true);
  const fectchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonProducts = await data.json();
    setProducts(jsonProducts);
    setIsStillLoading(false);
    console.log(products);
  };
  useEffect(() => {
    // console.log("in effect");
    fectchProducts();
  }, []);

  return (
    <div>
      {isStillLoading ? (
        <ReactLoading type={"bars"} color={"grey"} />
      ) : (
        products.map((product) => (
          <p key={product.id}>
            <Link to={`/shop/${product.id}`}>{product.title}</Link>:{" "}
            {product.price}{" "}
          </p>
        ))
      )}
    </div>
  );
}

export default ShopComponent;
