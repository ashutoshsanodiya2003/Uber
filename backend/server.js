const http = require('http')
const app = require ('./src/app.js')
const port = process.env.PORT || 3000
const connectDB = require('./src/db/db.js')

connectDB()
const server = http.createServer(app)  


 server.listen(port,()=>{
    console.log(`server is running on ${port}`)
 })