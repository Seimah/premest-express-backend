// modules
require('dotenv').config()  //read info from .env file
const express = require('express')  //importing express
const mongoose = require('mongoose')   //importing library to help connect with mongodb

const app = express()


// variables
const dbLink = process.env.DBLINK
const port = process.env.PORT
const userRoute = require('./src/routes/userRoutes')


// app.use('index', express.static('public'));

mongoose.connect(dbLink, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, () => {
    app.listen(port, () => {
        console.log(`DATABASE IS CONNECTED, app is up! on PORT: ${port}`)
    });
   
});

app.use(express.json())

// app.use(bodyParser.json({type: "application/*+json"}))

app.use(userRoute)
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello</h1>')
}) 







// const express = require('express')

// const app = express() 

// app.get('/', (request, response) => {
    // callback- a function that puts connection on separate threads
    // response.status(200). send('<h1> hello Sandra </h1>') 
    // helps to access requests- called functions or methods

// })

// app.listen(3124, () => { 
    // console.log('Sandra is working')
// })

// environment file- so a hacker or developer doesnt use ur database (exclude this file from github)