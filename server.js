const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());
app.use(express.static("public"));

const db = new sqlite3.Database("messages.db");

db.run(`CREATE TABLE IF NOT EXISTS messages(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 text TEXT
)`);

app.post("/send",(req,res)=>{
  const msg = req.body.message;
  db.run("INSERT INTO messages(text) VALUES(?)",[msg]);
  res.json({status:"saved"});
});

app.get("/messages",(req,res)=>{
  db.all("SELECT * FROM messages",(err,rows)=>{
    res.json(rows);
  });
});

app.listen(3000,()=>{
 console.log("Server running on port 3000");
});
