import express from "express";
import { CONFIG } from "./config/config.js";
import appTrainers from "./routers/trainers.js";
import appReportarInsidencia from "./routers/reportarIncidencia.js";
import appasignarComputadores from "./routers/asignarComputadores.js";
const appExpres = express();
appExpres.use(express.json());

appExpres.use("/reportes", appReportarInsidencia);
appExpres.use("/trainers", appTrainers);
appExpres.use("/ordenadores", appasignarComputadores);

appExpres.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});
