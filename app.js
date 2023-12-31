const http = require('http')
const { readFileSync } = require('fs')

const homepage = readFileSync('./index.html')
const homestyle = readFileSync('./css/styles.css')


const server = http.createServer((req,res)=>{
    const url = req.url
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()
    }else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>page not found</h1>')
    }
})

server.listen(5000)