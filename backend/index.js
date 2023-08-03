const express = require('express');
const app = express()

const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test"
})

app.get("/", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8080, () => {
    console.log("Connected to 8080...")
})