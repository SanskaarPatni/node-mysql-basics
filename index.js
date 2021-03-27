const { json } = require("express");
const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(express.json());
const db = mysql.createConnection({
  user: "sanskaar",
  password: "mysqlubuntu",
  host: "localhost",
  database: "employees",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  db.query(
    "insert into employeeTable (name,age)  values (?,?)",
    [name, age],
    (err, result) => {
      if (err) console.log(err);
      else res.send("Values inserted");
    }
  );
});

app.listen(3001, () => {
  console.log("Server running on PORT 3001");
});
