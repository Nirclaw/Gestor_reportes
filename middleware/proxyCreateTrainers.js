import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { createTrasiner } from "../controller/createTrainers.js";

const proxyCreateTrainer = express();

proxyCreateTrainer.use((req, res, next) => {
  try {
    let data = plainToClass(createTrasiner, req.body, {
      excludeExtraneousValues: true,
    });
    req.body=JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {
    res.status(error.status).send(error)
  }
});

export default proxyCreateTrainer