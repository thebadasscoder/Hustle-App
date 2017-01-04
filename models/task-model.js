"use strict";

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    title: {
      type:DataTypes.STRING,
      unique:true
    },
    description:{
      type:DataTypes.TEXT,
      unqiue:true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User, {
          foreignKey:{
            onDelete: "CASCADE",
            allowNull:true
          }
        });
      }
    }
  });

  return Task;
};