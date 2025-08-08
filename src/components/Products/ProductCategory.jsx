import React from "react";
import "../Products/FilterProduct.css"

const ProductCategory=({category})=>
{
    return (
      
         <tr>
           <th colSpan="2" style={{textAlign:"center"}} >{category}</th>
         </tr>
       
    )
}

export default ProductCategory;
