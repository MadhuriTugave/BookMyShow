const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port =8080;
const path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./connector");
const cors = require('cors')
app.use(cors())

const route = express.Router();
app.use("/api/booking",route);


route.post("/",async(req,res)=>{
try {
   const data = req.body;
//    console.log(data);
   if(data.movie && data.slot && data.seats){
    await connection.insertMany(data);
    res.status(200).send({message:"Successfully booking"});
   }else{
    res.send({message:"bad input"})
   }
       
   } catch (error) {
    console.log(error);
}
});
 

route.get("/",async(req,res)=>{
     const lastData = await connection.find().sort({_id:-1}).limit(1);
    //  console.log(lastData);
     if(lastData.length >= 1){
        
      res.status(201).send(lastData);
     }else{
        res.status(404).send({message: "no previous booking found"});
     }
      
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   