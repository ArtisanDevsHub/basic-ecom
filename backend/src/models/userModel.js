const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    
    email:{type:String,
        required:true,
        unique:true,
        match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        lowercase:true
    },


    password:{type:String,
        required:true,
        minlength:6
    },


    cartData:{type:Object,
        default:{}}
},{minimize:false})

const userModel = mongoose.models.user || mongoose.model('user',userSchema)
module.exports = userModel