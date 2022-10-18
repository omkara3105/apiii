const express = require("express");
const cros = require("cros");
const app=express();

app.use(cors());

const port =process.env.PORT || 3000;

const apiData=require("./data.json");

app.get("/",(req,res)=>{
    res.send("hemllo")
});

app.get("/service",(req,res)=>{
    res.send(apidata)
})

app.listen(port,()=>{
    console.log("i live")
})
