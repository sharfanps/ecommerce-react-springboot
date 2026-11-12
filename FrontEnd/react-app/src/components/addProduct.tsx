import React, { useState } from "react";
import "./addProduct.css"
import { addProduct } from "../services/api_service";


type Product = {
  id: number;
  name: string;
  price: number;
};

const AddProduct=() => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      id: Date.now(),
      name,
      price: Number(price),
    };
try{
    const result=await addProduct(newProduct);
    alert(result.message);
    setName("");
    setPrice("");
}catch(error:any){
  if(error.response?.status===403)
  {
alert("Access denied");
  }
  else
alert("Something went wrong");

    }

    
  };

  return (
    <div className="form-container">
  <h2>Add Product</h2>

  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Product Name</label>
      <br />

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter product name"
        required
      />
    </div>

    <div className="form-group">
      <label>Price</label>
      <br />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
        required
      />
    </div>

    <button type="submit" className="submit-btn">
      Add Product
    </button>
  </form>
</div>
  );
};

export default AddProduct;