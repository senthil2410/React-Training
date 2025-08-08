import React from "react";
import FilterProduct from "./FilterProduct.jsx";
import "../Products/FilterProduct.css"
const Product = () => {
  const PRODUCTS = [
    { name: "book", price: 160, stocked:true,category:"Stationary" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { name: "pen", price: 20, stocked:false,category:"Stationary"  },
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { name: "notebook", price: 60, stocked:false,category:"Stationary" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { name: "pencil", price: 8, stocked:false,category:"Stationary" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" }
  ];

  return (
    <div>
      <FilterProduct products={PRODUCTS} />
    </div>
  );
};

export default Product;
