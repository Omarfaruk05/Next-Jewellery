"use client";

import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://next-jewellery.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.data));
  }, []);

  console.log(products);
  return (
    <div>
      {products.length ? (
        products?.map((product, index) => (
          <Product key={index} product={product} />
        ))
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default Products;
