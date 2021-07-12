'use strict';

const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const port = 5000


// require('dotenv').config()

//parsing middleware
app.use(express.urlencoded({ extended: true}))

//Setup handlebars engine and views location
app.set('view engine', 'hbs')

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/views')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Setup static dir to serve
app.use(express.static(publicDirectoryPath))

//index
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/index', (req, res) => {
    res.render('index')
})



app.listen(port, () => console.log('listening on port: ' + port))