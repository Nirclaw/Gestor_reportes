import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { createReport } from "../controller/createReportes.js";

const proxyCreateReporte = express();

proxyCreateReporte.use((req, res, next) => {
  try {
    let data = plainToClass(createReport, req.body, {
      excludeExtraneousValues: true,
    });
    req.body = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default proxyCreateReporte;
