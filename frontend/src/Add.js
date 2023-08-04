import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });
  const [error, setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(book);
    try {
      await axios.post("http://localhost:8080", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <br />
      <textarea
        rows={5}
        type="text"
        placeholder="Description"
        name="desc"
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="Cover"
        name="cover"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleClick}>Add</button>
      <br />
      {error && "Something went wrong!"}
    </div>
  );
};

export default Add;