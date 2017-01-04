"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type:DataTypes.STRING,
      unique:true,
      validate:{
        notEmpty:true
      }
    },
    email: {
      type:DataTypes.STRING,
      unique:true,
      validate:{
        isEmail:true,
        notEmpty:true
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    }
  },{
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
      }
    }
  });

  return User;
};

