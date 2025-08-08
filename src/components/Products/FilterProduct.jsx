import React from "react";
import "../Products/FilterProduct.css"
import ProductCategory from "./ProductCategory";
import ProductData from "./ProductData";

const FilterProduct=({products})=>
{
    const rows=[];
    let lastCategory=null;

const filterCategory=[...products].sort((a,b)=>
{
    if(a.category<b.category)
    {
        return-1;

    }
    if(a.category>b.category)
    {
        return 1;
    }
    else{
        return 0;
    }
});

filterCategory.forEach((product)=>
{
    if(product.category!==lastCategory)
    {
        rows.push(<ProductCategory category={product.category} />);
    }
    rows.push(<ProductData product={product}/>);

    lastCategory=product.category;
})

    return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
    
}

export default FilterProduct ;