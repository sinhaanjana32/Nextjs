const mongoose = require("mongoose")
const {schema} = mongoose


const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            minlength: 3,
            unique: false
        },
        age:{
            type:Number,
            minlength:1,
            unique: false
        },
        email:{
            type:String,
            minlength: 3,
            unique: true
        },
        password:{
            type:String,
            minlength: 6,
            unique: false
        }

    }
)

const User = mongoose.model("user", UserSchema)
module.exports = User