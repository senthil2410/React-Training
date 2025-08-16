import React, { useEffect, useState, useTransition } from "react";

const UseTransition= () => {

  const [search, setSearch] = useState("");

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")

      .then((response) => {
        if (!response.ok) {
          throw new Error("There is some network error");
        }
        return response.json();
      })

      .then(res => {
        setData(res);
        setFilteredData(res);
      })

      .catch(err => console.log("There is an error", err));

  }, []);


  const handleChange = (e) => {
    const input = e.target.value;
    setSearch(input);

    startTransition(() => {
      const filtered = data.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredData(filtered);

    });

  };


  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search the Product.."
        onChange={handleChange}
      />

      {isPending && <p style={{ color: "red" }}>Loading..</p>}

      <ul>
        {
        filteredData.map((product, index) => 
          (
          <li key={index}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </li>
        ))
        }
      </ul>
  
    </div>
  );
};

export default UseTransition;
