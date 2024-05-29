import express from  "express"
import fetch from "node-fetch";
import cors from "cors"


const app = express();
app.use(cors())


app.get("/",async(req,res)=>{
const response = await fetch(
  "https://inrdeals.com/fetch/stores?token=2c3f5a1662f83d1db90c9441012d4b3ffc21bbfb&id=maa443089855"
);
const data = await response.json()
res.json(await data)
}) 


app.get("/offers", async (req, res) => {
  const response = await fetch(
    "https://inrdeals.com/api/v1/coupon-feed?token=7d93f1be383789a926af8abea04225ad421ece1c&id=maa443089855"
  );
  const data = await response.json();
  res.json(await data);
}); 



app.listen(3000,()=>{
    console.log("Listening On port 3000");
})