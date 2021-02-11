import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

function ProductCoponent({ match }) {
  const [isStillLoading, setIsStillLoading] = useState(true);
  const [product, setProduct] = useState({});
  const productID = match.params.id;
  const URI = `https://fakestoreapi.com/products/${productID}`;
  const fetchProduct = async () => {
    const data = await fetch(URI);
    const jsonProduct = await data.json();
    setProduct(jsonProduct);
    setIsStillLoading(false);
  };
  useEffect(() => {
    console.log("in effect");
    fetchProduct();
  }, []);
  return (
    <div>
      {isStillLoading ? (
        <ReactLoading type={"bars"} color={"grey"} />
      ) : (
        product.title
      )}
    </div>
  );
}

export default ProductCoponent;
