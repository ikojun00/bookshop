const express = require('express');
const cors = require('cors')
const app = express()
require('dotenv').config();
 
app.use(cors());
app.use(express.json());

const mysql = require('mysql');
const db = mysql.createConnection({
    host: process.env.REACT_APP_HOST,
    user: process.env.REACT_APP_USER,
    password: process.env.REACT_APP_PASSWORD,
    database: process.env.REACT_APP_DATABASE
})

app.get("/", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
    console.log(values);
  
    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.delete("/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";
  
    db.query(q, [bookId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.put("/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
  
    db.query(q, [...values, bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
});

app.listen(8080, () => {
    console.log("Connected to 8080...")
})