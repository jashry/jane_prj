const Router = require('koa-router')
const UsersControler = require('../models/users')
const fs = require('fs')

let form = new Router()
form
    .get("/", (ctx, next) => {
        ctx.response.type = 'html'
        ctx.response.body = fs.createReadStream("./static/view/form.html")
    })
    .get("/reg", (ctx, next) => {
        ctx.response.body = ctx.query
        console.log(ctx.query)
    })
    .post("/reg", (ctx, next) => {
        ctx.response.body = ctx.query
        UsersControler.save(ctx.query)
    })

module.exports = form