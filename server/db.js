require('dotenv').config()
const mongoose= require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.URI)
        console.log("Mongo Connected");
    }
    catch(err){
        console.log("Connection Failed:", err);
    }
}

const disconnectDB = async()=>{
    mongoose.disconnect()
    console.log("MongoDB Disconnected")
}

const checkConnected=()=>{
    return mongoose.connection.readyState===1 ; 
} 

module.exports={
    connectDB,
    disconnectDB,
    checkConnected
}