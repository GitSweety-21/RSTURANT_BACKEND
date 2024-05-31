import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTURANT1"
    }).then(()=>{
        console.log("Connected to database sucessfully");
    }).catch(err=>{
       console.log(`Some error occured while connecting to database ${err}`);
        
    })
};