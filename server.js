/********************************************************************************** 
 * WEB322 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *  Name: _Chidera Osondu_______ Student ID: 174098210___ Date: _13/09/2023_
 *  Online (Cyclic) URL: https://better-eel-blazer.cyclic.app/
 * *********************************************************************************
    
    */


import express  from "express";

const app = express();
const HTTP_PORT = process.env.PORT || 3000;

app.get("/", (req,res)=>{ res.send("Chidera Osondu - 174098210")}
   
)

app.listen(HTTP_PORT, ()=>console.log(`server running on port ${HTTP_PORT}`))

