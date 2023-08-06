import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: location.state.title,
    desc: location.state.desc,
    price: location.state.price,
    cover: location.state.cover,
  });

  const [error, setError] = useState(false);

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <br />
      <h1>Update the Book</h1>
      <br />
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={book.title}
        onChange={handleChange}
      />
      <br />
      <textarea
        rows={5}
        placeholder="Description"
        name="desc"
        value={book.desc}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        placeholder="Price"
        name="price"
        value={book.price}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="Cover"
        name="cover"
        value={book.cover}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleClick}>Update</button>
      <br />
      {error && "Something went wrong!"}
    </div>
  );
};

export default Update;