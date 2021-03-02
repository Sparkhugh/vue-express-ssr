const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

const app=require('./views/app')	//匹配`/home`路由

server.get('/home', (req, res) => {
	res.setHeader('Content-Type', 'text/html;charset=UTF-8')
	
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8080)
