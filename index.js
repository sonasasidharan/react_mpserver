// importing json server package
const JSONserver=require('json-server')

// creating server using create() methode from json-server
const MPserver=JSONserver.create()

// generating path/route to server resource
const router=JSONserver.router('db.json')

// initialize json server middleware
const  middleware=JSONserver.defaults()

// creating port number for server
const PORT=3000 | process.env.PORT

// /implementing route to reaource to server
MPserver.use(middleware)

// implementing middleware to server
MPserver.use(router)

// run command for server
MPserver.listen(PORT,()=>{
    console.log(`server is running at:${PORT}`)
})
