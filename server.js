const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:"hotel"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM items";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.put('/update/:id', (req, res) => {
    const sql = "update items set pname = ? ,price=? where id=?";
    const values = [
        req.body.pname,
        req.body.price
    ]
    const id = req.params.id;

    db.query(sql, [...values,id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.delete('/menu/:id', (req, res) => {
    const sql = "DELETE FROM items WHERE id =?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})


app.listen(8000, () => {
    console.log("listening")
})