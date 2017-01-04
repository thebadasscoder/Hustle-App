//EXPRESS
var express = require('express');
var app = express();
var db = require('./models');
var path = require('path');

var bodyparser = require('body-parser');
var cookieparser = require('cookie-parser');
var session = require('express-session');
var Strategy = require('passport-local').Strategy;
var passport  = require('passport');
var flash = require('connect-flash');

// var morgan = require('morgan');
// var multer = require('multer');

// var jsx = require('babel-core');


// app.set('view engine', 'jsx');
// app.set('views', path.join(__dirname ,'front_end'));




//IMPORTING MODELS
var Task = require('./models/index.js').Task
var User = require('./models/index.js').User

//MIDDLEWARE 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname))
app.use(cookieparser());
app.use(require('morgan')('combined'));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(session({
secret:'peterpiperpickedapeckofpickledpeppers',
resave: true, 
saveUninitialized:true
}));

//AUTHENTICATION AND AUTHORIZATION USING PASSPORT 

passport.use(new Strategy(
  function(email, password,cb) {
  	User.findOne({where:{email:email}})
  	.then((user)=>{
  		console.log(password, 'this is password');
  		console.log(user.name, "this is the name");
  		console.log(user.id, 'this is the id')
  	if (user && password === user.password) {
		return cb(null, user);
	} else {
		return cb(null, false);
		res.redirect('/signup');
	}
  	})

  }));

passport.serializeUser((user, cb)=>{
 cb(null, user.id);
});

passport.deserializeUser((id, cb)=>{
  db.User.findById(id, (err, user)=>{
    if (err) { return cb(err); }
    cb(null, user);
  });
});

//ROUTES 

//ALL USERS INFORMATION 
app.get('/users', (req,res)=>{
	User.findAll({include: [Task]})
	.then((user)=>{
		console.log('these are all of the users')
		res.send(user);
	})
	.catch((error)=>{
		res.send(error);
	})
})

//GET ALL USERS BY THEIR ID 
app.get('/users/:id', (req,res)=>{
	User.findById(req.params.id)
	.then((user)=>{
		console.log('We found this users information!')
		res.send(user);
	})
	.catch((error)=>{
		res.send(error);
	})
})


//LOGGING IN USERS 
app.post('/login', 
  passport.authenticate('local'),(req, res)=>{
    res.send(JSON.stringify(req.user));
    `																		`
  });


//NEW USERS 

app.post('/signup', (req,res)=>{
	User.findOrCreate({where:{email:req.body.email},
	defaults:{
		name:req.body.name,
		password:req.body.password
	}
	})
	.then((user)=>{
		console.log('New User Has Signed Up!')
		res.send(user)
		res.redirect('/login')
	})
	.catch((error)=>{
		res.send(error);
	})
})

// LOGGING OUT USERS 
app.get('/logout/:id',(req,res)=>{
	User.findById(req.params.id)
	.then((user)=>{
	req.logout();
	res.send(user.name + ' has signed out!')
	})
	.catch((error)=>{
		res.send(error);
	})
	
})

// USERS WILL HAVE ACCESS TO THEIR PROFILE PAGE AS LONG AS THEY ARE LOGGGED IN 
// IF NOT, THEY WILL BE RE-DIRECTED TO THE LOGIN PAGE 
// app.get('/profile', require('connect-ensure-login').ensureLoggedIn(),
// 	function(req,res){
// 		res.send('Welcome,' + user.name + '!')
// 		res.render('profile-page')
// 	})

// app.post('/tasks/:id', (req,res)=>{
	
// })


// ALL OF THE TASKS CREATED WITHIN THE DATABASE
app.get('/tasks', (req,res)=>{
	Task.findAll()
	.then((task)=>{
		console.log('Here are all of the tasks')
		res.send(task);
	})
	.catch((error)=>{
		res.send(error);
	})
})

//GETTING TASKS BY USER ID 
app.get('/tasks/:userId', (req,res)=>{
	Task.findAll({where:{UserId:req.params.userId}})
	.then((task)=>{
		console.log('This is all of the tasks for this user')
		res.send(task);
	})
	.catch((error)=>{
		res.send(error);
	})
})



//CREATING A NEW TASK BY THE USERS ID 
//EVERY USER WILL BE ABLE TO CREATE AS MANY TASKS AS THEY WANT 
app.post('/tasks', (req,res)=>{
	let userId;
	return User.findAll({
		where:{email:req.body.email}
	})
	.then((user)=>{
		userId = user[0].dataValues.id
		// console.log('UserID===>',UserId)
	})
	.then(()=>{
		return Task.findOrCreate({
			where:{
			description:req.body.text,
			title:req.body.title
			},
			defaults:{
				UserId: userId
			},
		})
	})
	.then((task)=>{
		console.log('task ===> CHECK:', task);
		console.log('UserId', userId);
		task[0].addUsers([UserId])
	})
	.catch((error)=>{
		res.send(error);
	})
})


//UPDATING TASKS BY THEIR ID 
app.put('/tasks/:id', (req,res)=>{
	Task.update({description:req.body.text}, {where:{id:req.params.id},
	defaults:{
		title:req.body.title
	}
	})
	.then((task)=>{
		console.log('You have just made an update to your task');
		res.send(task);
	})
	.catch((error)=>{
		res.send(error)
	})
})

//DELETE TASKS BY THEIR ID 
app.delete('/tasks/:id', (req,res)=>{
	Task.destroy({where:{id:req.params.id}})
	.then((task)=>{
		console.log('Task has been deleted!')
		res.send(200);
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

//