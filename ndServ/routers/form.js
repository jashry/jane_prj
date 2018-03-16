const Router = require('koa-router')
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
        console.log(ctx.query)
    })

    module.exports=form