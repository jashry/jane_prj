const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
  name:String,
  password:String
})

let users=mongoose.model('users',userSchema)



module.exports=users