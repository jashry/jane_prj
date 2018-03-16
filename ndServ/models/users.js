const mongoose = require('mongoose')
const Users = require('../schema/users')

let usersMod = {}
usersMod.save = (data) => {
  Users.create(
    {
      name:data.name,
      password:data.password
    },
    (err,data)=>{
    if(err)  return handleError(err)
  })
}


module.exports = usersMod