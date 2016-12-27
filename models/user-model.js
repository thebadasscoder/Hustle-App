"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    fullName: {
      type: DataTypes.STRING,
      validate:{
        len:[6,40]
      }
    },
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:true,
        len:[5,30]
      }
    },
    password:{
      type:DataTypes.STRING,
      validate:{ 
        len:[6,24],
        isAlpha:{
          msg: 'Password must only contain letters'
        }
      }
    }
  }, {
    classMethod: {
      associate: function(models) {
        User.hasMany(models.Task)
      }
    }
  });
  return User;
};