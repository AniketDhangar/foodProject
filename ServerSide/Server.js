import express from "express";
import bodyParser from "body-parser";
import { FoodDBConnect } from "./src/Database/Config";


//
const app = express();
app.use(bodyParser.json())

//database calling 
FoodDBConnect()

app.listen(5000,()=>{
    console.log("food app server is started..")
})