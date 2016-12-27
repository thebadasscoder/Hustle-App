//EXPRESS
var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')

var db = require('./models')

//IMPORTING MODELS
const Task = require('./models/index.js').Task
const User = require('./models/index.js').User
const LogIn = require('./models/index.js').LogIn

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
app.use(express.static(__dirname))


//ROUTES 

//USERS//

//GETTING ALL USERS INFORMATION 
app.get('/api/users', (req,res)=>{
	User.findAll()
	.then((data)=>{
		console.log(data, 'We have all the users information!');
		res.send(data)
	})
	.catch((error)=>{
		res.send(error);
	})
})


//GETTING USERS INFORMATION BY THEIR ID 
app.get('/api/users/:id', (req,res)=>{
	User.findById(req.params.id)
	.then((data)=>{
		console.log(data, 'Here is this users information')
		res.send(data);
	})
	.catch((error)=>{
		res.send(error);
	})
})

//UPDATING USERS INFORMATION BY ID
app.put('/api/users/:id', (req,res)=>{
	User.update({password:req.body.password}, {where:{id:req.params.id}})
	.then((data)=>{
		console.log(data, 'User info is updated!')
		res.send(data)
	})
	.catch((error)=>{
		res.send(error)
	})
})



//CREATING A NEW USER
app.post('/api/users', (req,res)=>{
	User.findOrcreate({where:{email:req.body.emailAddress},
		defaults:{
		fullName:req.body.name,
		email:req.body.emailAddress,
		password:req.body.password
		}
	})
	.then((data)=>{
		console.log(data, 'new user created!');
		res.send(data)
	})
	.catch((error)=>{
		res.send(error)
	})
})



//TASKS//

//GETTING ALL OF THE TASKS 
app.get('/api/tasks', (req,res)=>{
	Task.findAll()
	.then((data)=>{
		console.log(data, 'This is all of the tasks')
		res.send(data)
	})
	.catch((error)=>{
		res.send(error)
	})
})

//UPDATING A TASK
app.put('/api/tasks/:id', (req,res)=>{
	Task.update({
		title:req.body.title,
		description:req.body.content
	   }, {where:{id:req.params.id}})
	.then((data)=>{
		console.log(data, 'Task is now updated!')
		res.send(data)
	})
	.catch((error)=>{
		res.send(error);
	})
})


//CREATE A NEW TASK
app.post('/api/tasks', (req,res)=>{
	Task.create({
		title:req.body.title, 
		description: req.body.content
	})
	.then((data)=>{
		console.log(data, 'new task!')
		res.send(data)
	})
	.catch((error)=>{
		res.send(error)
	})
})


//DELETE A TASK 
app.delete('/api/tasks/:id', (req,res)=>{
	Task.destroy({
		where:{
			id:req.params.id
		}
	})
	.then((data)=>{
		console.log(data, 'Task DELETED!')
		res.send(data)
	})
	.catch((error)=>{
		res.send(200);
	})
})


//LOGIN 
app.get('/api/login', (req,res)=>{
	LogIn.findAll()
	.then((data)=>{
		console.log('We have all the Login ID')
		res.send(data)
	})
	.catch((error)=>{
		res.send(error);
	})
})



app.get('/*',(req,res)=>{
	res.sendFile(path.join(__dirname, '/views/index.html'))
})

db.sequelize.sync().then(function(){
	app.listen(3000)
})
