const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port =8080;
const path = require('path')
const BookingModel= require("./schema.js")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./connector");
const cors = require('cors')
app.use(cors())

const route = express.Router();
app.use("/api/booking",route);
connection();

route.post("/", async (req, res) => {
   try {
       const { movie, slot, seats,name } = req.body;
       if(movie && slot && seats ){
         const myData =new BookingModel({ movie, slot, seats,name });
         //  console.log(myData)
          const data = await myData.save();
   
          return res.json({
              message:"Booking successful",
              status:200,
              data:data
          })
       }else{
         return res.json({
            message:"some fields are missing",
            data:null
         })
       }
    
   } catch (error) {
       console.log("error", error.message);
       return res.status(500).json({
           message:"something went wrong!",
           data:{}
       })
}
});
 

route.get("/",async(req,res)=>{
    try {
      
      const [lastData] = await BookingModel.find().sort({_id:-1}).limit(1)
        // console.log(data);
      if (!lastData) {
          // if no booking found this will be printed
          return res.status(200).json({
              message:"No previous Booking found!",
              data:null
          })    
      }
      
      // have any booking then print this message
      return res.status(200).json({
          message:"last booking!",
          data:lastData
      }) 
        
    } catch (error) {
      console.log(error)
    }
      
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   