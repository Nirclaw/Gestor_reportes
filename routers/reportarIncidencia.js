import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxyCreateReporte from "../middleware/proxyCreateReporte.js";
const appReportarInsidencia = Router();
let con = undefined;

appReportarInsidencia.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

appReportarInsidencia.get("/cantidad", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM usuario_reporte`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

appReportarInsidencia.post("/create",proxyCreateReporte, (req, res) => {
  con.query(
    /*sql*/ `INSERT INTO usuario_reporte SET ?`,
    req.body,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send("creado con exito");
    }
  );
});

export default appReportarInsidencia;
