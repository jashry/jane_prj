const http = require('http')
const fs = require('fs')
const mime = require('mime')
const querystring = require('querystring')
const urlLib = require('url')

const server = http.createServer(function(req, res) {
    let objUrl = urlLib.parse(decodeURI(req.url), true);
    let pathname = objUrl.pathname
    let query = objUrl.query
    outStr = String(pathname) + JSON.stringify(query)
    res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' })
    res.end(outStr)
    console.log(pathname, query)
})

server.listen(1337, function() {
    console.log('监听1337中...')
})