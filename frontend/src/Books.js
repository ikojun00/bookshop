import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
        try {
            const res = await axios.get("http://localhost:8080");
            setBooks(res.data);
        } catch (err) {
            console.log(err);
        }
        };
        fetchAllBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/${id}`);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
        <div className="books">
            {books.map((book) => (
            <div key={book.id} className="book">
                <img src={book.cover} alt={book.title} />
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <h3>Price: {book.price}€</h3>
                <button className="update-button">
                <Link
                to={`/update/${book.id}`}
                state={book}>
                Update
                </Link>
                </button>
                <br />
                <button className="delete-button" onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
            ))}
        </div>
        </>
    )
}

export default Books;