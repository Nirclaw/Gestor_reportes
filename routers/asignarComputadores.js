import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxycreateasignarComputadores from "../middleware/proxycreateasignarComputadores.js";
const appasignarComputadores = Router();
let con = undefined;

appasignarComputadores.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

appasignarComputadores.get("/cantidad", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM ordenadores`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

appasignarComputadores.post("/create",proxycreateasignarComputadores, (req, res) => {
    con.query(
      /*sql*/ `INSERT INTO ordenadores SET ?`,
      req.body,
      (err, data) => {
        if (err) {
          res.send(err);
        } else res.send("creado con exito");
      }
    );
  });

export default appasignarComputadores;
