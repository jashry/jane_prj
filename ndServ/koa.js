const Koa = require('koa')
const fs = require('fs')
const Router = require('koa-router')
const app = new Koa()


const mongoose = require('mongoose')
const User = require('./model/users')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/webs', { useMongoClient: true, })
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
    .once('openUri', function() {
        console.log("we're connected!")
    });



// 获取数据 
User.find({ name: 'jack' }).exec((err, person) => {
    if (err) {
        console.log(err)
    } else {
        // console.log(person)
    }
})


//路由
let router = new Router()
router
    .get("/", (ctx, next) => {
        ctx.response.body = "Landing"
    })
    .get("/index", async(ctx, next) => {
        ctx.response.type = 'html'
        ctx.response.body = await fs.createReadStream(__dirname + "/static/view/index.html")
    })

app.use(router.routes()).use(router.allowedMethods())

// 监听3000
app.listen(3000, () => {
    console.log('now start-quick is starting at port 3000')
})