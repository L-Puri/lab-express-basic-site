const express = require('express')
const app = express()
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname) + '/views')
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static('public'))
app.use(expressLayouts)

app.get("/", (request, response, next) => response.render('index'));
app.get("/home", (request, response, next) => response.render('home'));
app.get("/about", (request, response, next) => response.render('about'));
app.get("/works", (request, response, next) => response.render('works'));

app.listen(3001);




