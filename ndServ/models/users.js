const mongoose = require('mongoose')
const Users = require('../schema/users')

module.exports = {
  save: (data) => {
    Users.create({
        name: data.name,
        password: data.password
      },
      (err, data) => {
        if (err) return handleError(err)
      })
  }
}
