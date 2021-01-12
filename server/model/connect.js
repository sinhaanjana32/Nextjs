const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();
const User = require("./schemas/user")

const connectURI = process.env.MONGO_DB_URI;

mongoose.set("useCreateIndex", true)

const connect = async () =>{
    try{
        await mongoose.connect(connectURI, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        const Jhon = new User({
            email:"jhon@gmail.com",
            password:"123456",
            age:"21",
            name:"jhon"
        })
        await Jhon.save()
        console.log("data saved");
        console.log("connected to database");
    } catch(e){
        console.log(`an error occured ${e.message}`);
    }
}


module.exports = connect;