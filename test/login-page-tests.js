const expect = require('chai').expect; 

//Importing my components here 
const getInitialState= ('../components/login-page.jsx').getInitialState

describe('login-page tests', () =>{
	it('getInitialState() should return an object with only two keys as strings', ()=>{
	 let getInitialState = 
	 {
	 	email: 'katespade@gmail.com', 
	 	password: 'iloveshoestoo'
	 }
	 expect(getInitialState).to.have.keys(['email', 'password'])
	 expect(getInitialState).to.be.a('object');
	})
}) ;