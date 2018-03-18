const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const static = require('koa-static')
const app = new Koa()

const mongoose = require('mongoose')

// 引入外置路由
const home = require('./routers/home')
const form = require('./routers/form')


mongoose.Promise = global.Promise
mongoose.connect('mongodb://adminOwner:adminOwner@localhost/webs', { useMongoClient: true, }).then(
    () => { console.log('mongoDB connect success!') },
    err => { console.log(err) }
)



//挂载路由

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
    console.log('sever launched , listen to port 3000 ')
})