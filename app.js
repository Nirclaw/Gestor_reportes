import express from "express";
import { CONFIG } from "./config/config.js";
import appTrainers from "./routers/trainers.js";
const appExpres = express();
appExpres.use(express.json())
appExpres.use("/Reportes",(req,res)=>{
    res.send("holas")
})
appExpres.use("/trainers",appTrainers)
appExpres.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});

