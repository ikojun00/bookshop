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
        <div>Books</div>
    )
}

export default Books;