import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { crearYasignar } from "../controller/createasignarComputadores.js";

const proxycreateasignarComputadores = express();

proxycreateasignarComputadores.use((req, res, next) => {
  try {
    let data = plainToClass(crearYasignar, req.body, {
      excludeExtraneousValues: true,
    });
    req.body = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default proxycreateasignarComputadores;
