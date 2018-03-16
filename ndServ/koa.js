const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const static = require('koa-static')
const app = new Koa()

const mongoose = require('mongoose')
const Users = require('./models/users')

const home=require('./routers/home')
const form=require('./routers/form')


mongoose.Promise = global.Promise

mongoose.connect('mongodb://adminOwner:adminOwner@localhost/webs', { useMongoClient: true, })
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
    .once('openUri', function() {
        console.log("we're connected!")
    });



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