import React from "react";
import "../Products/FilterProduct.css"
const ProductData=({product})=>
{
      const item = product.stocked ? (
    product.name
  ) : (
<span style={{ color: "red" }}>{product.name}</span>
  );

  const itemPrice = product.stocked ? (
 product.price
  ) : (
    <span style={{ color: "red" }}>{product.price}</span>
  );

  return (
   
      <tr>
      <td>{item}</td>
      <td>{itemPrice}</td>
    </tr>
    
  );

}

export default ProductData;


