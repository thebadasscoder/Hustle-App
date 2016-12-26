//EXPRESS
var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')

var db = require('./models')

//IMPORTING MODELS
const LogIn= require('./models/login-model.js').LogIn
const SignUp = require('./models/sign-up-model.js').SignUp

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
app.use(express.static(__dirname))

//ROUTES 





app.get('/*',(req,res)=>{
	res.sendFile(path.join(__dirname, '/views/index.html'))
})

db.sequelize.sync().then(function(){
	app.listen(3000)
})