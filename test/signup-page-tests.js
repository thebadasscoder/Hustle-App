const expect = require('chai').expect; 

//Importing my components here 
const getInitialState= ('../components/signup-page.jsx').getInitialState

describe('signup-page tests', () =>{
	it('getInitialState() should return an object with the three keys as strings', ()=>{
	 let getInitialState = 
	 {
	 	fullName : 'Kate Spade', 
	 	email: 'katespade@gmail.com', 
	 	password: 'iloveshoestoo'
	 }
	 expect(getInitialState).to.have.keys(['fullName', 'email', 'password'])
	 expect(getInitialState).to.be.a('object');
	})
}) ;