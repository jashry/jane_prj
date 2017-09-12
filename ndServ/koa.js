const Koa = require('koa')
const fs = require('fs')
const route = require('koa-route')
const app = new Koa()

const main = ctx => {
    ctx.response.body = "hello koa.js! " + new Date().toLocaleString()
}
const home = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(__dirname + "/static/view/index.html")
}
app.use(route.get("/home", home))
app.use(route.get("/", main))

app.listen(3000)

console.log('now start-quick is starting at port 3000')