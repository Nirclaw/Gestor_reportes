import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxyCreateTrainers from "../middleware/proxyCreateTrainers.js";

const appTrainers = Router();
let con = undefined;

appTrainers.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

appTrainers.post("/create", proxyCreateTrainers,(req, res) => {
  con.query(/*sql*/ `INSERT INTO trainers SET ? `, 
  req.body, (err, data) => {
    if (err) {
        console.log(req.body);
      res.send(err);
    } else res.send("creado con exito");
  });
});

appTrainers.get("/cantidad", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM trainers`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

export default appTrainers;
