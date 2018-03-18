const Router = require('koa-router')
const fs = require('fs')
let home = new Router()
home
    .get("/", (ctx, next) => {
        ctx.response.body = "Landing"
    })
    .get("index", async(ctx, next) => {
        ctx.response.type = 'html'
        ctx.response.body = fs.createReadStream(__dirname + "/static/view/index.html")
    })

module.exports=home