const mongoose = require('mongoose')
const Users = require('../schema/users')

let usersCtr = {}
usersCtr.save = (data) => {
  Users.create(
    {
      name:data.name,
      password:data.password
    },
    (err,data)=>{
    if(err)  return handleError(err)
  })
}


module.exports = usersCtr