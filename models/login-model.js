"use strict";

module.exports = function(sequelize, DataTypes){
	const LogIn = sequelize.define("LogIn", {
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
	return LogIn;
};