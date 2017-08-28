const http = require('http')
const fs = require('fs')
const query = require('querystring')

const server = http.createServer().listen('3000', function() {
    console.log("服务启动，监听端口中！")
})

server.on("request", function(req, res) {
    res.writeHead(200, { "content-type": "text/plain" })
    res.write("wwwo", "UTF-8", function() {
        console.log("回应请求")
    })
    res.end()
    console.log("接收到请求")
})