const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const static = require('koa-static')
const app = new Koa()


const mongoose = require('mongoose')
const Users = require('./models/users')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://adminOwner:adminOwner@localhost/webs', { useMongoClient: true, })
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
    .once('openUri', function() {
        console.log("we're connected!")
    });



// // 获取数据 
Users.find({ name: 'jack' }).exec((err, person) => {
    if (err) {
        console.log(err)
    } else {
        console.log(person)
    }
})


//路由
let home = new Router()
home
    .get("/", (ctx, next) => {
        ctx.response.body = "Landing"
    })
    .get("index", async(ctx, next) => {
        ctx.response.type = 'html'
        ctx.response.body = fs.createReadStream(__dirname + "/static/view/index.html")
    })

let form = new Router()
form
    .get("/", (ctx, next) => {
        ctx.response.type = 'html'
        ctx.response.body = fs.createReadStream(__dirname + "/static/view/form.html")
    })
    .get("/reg", (ctx, next) => {
        ctx.response.body = ctx.query
        console.log(ctx.query)
    })
    .post("/reg", (ctx, next) => {
        ctx.response.body = ctx.query
        console.log(ctx.query)
    })

let router = new Router()
router
    .use("/", home.routes(), home.allowedMethods())
    .use("/form", form.routes(), form.allowedMethods())


app
    .use(router.routes())
    .use(bodyParser())
    .use(router.allowedMethods())
    .use(static(path.join(__dirname, "/static")))

// 监听3000
app.listen(3000, () => {
    console.log('now start-quick is starting at port 3000')
})