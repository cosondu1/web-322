import express  from "express";

const app = express();
const HTTP_PORT = process.env.PORT || 3000;

app.get("/", (req,res)=>{ res.send("Chidera Osondu - 174098210")}
   
)

app.listen(HTTP_PORT, ()=>console.log(`server running on port ${HTTP_PORT}`))

