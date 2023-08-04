import React from "react";
import { useEffect, useState } from "react";
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
    console.log(books);

    return (
        <>
        <div className="books">
            {books.map((book) => (
            <div key={book.id} className="book">
                <img src={book.cover} alt={book.title} />
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <h3>Price: {book.price}€</h3>
            </div>
            ))}
        </div>
        </>
    )
}

export default Books;