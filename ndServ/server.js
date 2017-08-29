const http = require('http')
const fs = require('fs')
const mime = require('mime')
const querystring = require('querystring')
const urlLib = require('url')

const server = http.createServer(function(req, res) {
    let buffer = "";

    req.on('data', function(data) {
        buffer += data
    })

    req.on('end', function() {
        let objUrl = urlLib.parse(decodeURI(req.url), true);
        let pathname = objUrl.pathname
        let get_query = objUrl.query
        let Post = buffer;
        res.writeHead(200, { "content-type": "text/html;charset:utf-8" })
        if (pathname == "/") {
            // home page
            fs.readFile("./static/view/index.html", function(err, data) {
                if (err) {
                    res.end(err)
                } else {
                    res.write(data)
                    res.end()
                }
            })

        } else if (pathname == "/user") {
            // user router
            console.log(Post)
            res.write(JSON.stringify(Post))
            res.end()

        } else {
            // static files
            console.log(pathname)
            fs.readFile("static" + pathname, function(err, data) {
                if (err) {
                    res.end(err)
                } else {
                    res.write(data)
                    res.end()
                }
            })

        }

    })

})

server.listen(1337, function() {
    console.log('监听1337中...')
})