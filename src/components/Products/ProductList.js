import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function ProductList({ productLimit }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${productLimit}`
    );
    const data = await response.json();
    if (data?.products) {
      setProducts(data.products);
    }
  };

  return (
    <div>
      <ul className="divide-y divide-gray-100">
        {products?.map((product) => {
          return <ProductItem details={product} key={product.id} />;
        })}
      </ul>
    </div>
  );
}

export default ProductList;
