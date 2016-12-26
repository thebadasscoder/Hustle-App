"use strict";

module.exports = function(sequelize, DataTypes){
	const SignUp = sequelize.define("SignUp", {
			fullName:{
				type:DataTypes.STRING,
				validate:{
					isAlpha:true,
					notNull:true,
					len:[6,40]
				}
			},
			email: {
				type: DataTypes.STRING,
				validate:{
					isEmail:true,
					isNumeric:true,
					notNull:true,
					len: [13, 35]
				}
			},
			password:{
				type: DataTypes.STRING,
				 validate:{
				 	isAlpha:true,
				 	isNumeric:true,
				 	notNull:true,
				 	len:[6,24]
				}
			} 
		}
	);
	return SignUp;
};