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
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <br />
      <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="Book cover"
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