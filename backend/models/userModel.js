const mongoose = require('mongoose');
const userModel = mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true, unique: true },
    password:{ type: String, required: true },
    pic:{
        type: String,
        required: true,
        default: 'https://freesvg.org/img/abstract-user-flat-4.png'
    }
},{ timestamps: true });
const User = mongoose.model('User',userModel);
module.exports = User;