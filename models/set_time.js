'use strict';
const {
  Model
} = require('sequelize');
const stage = require('./stage');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
   
    static associate( {Event, Band, Stage} ) {
      // set_time
      Set_Time.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      })

      Set_Time.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
      Set_Time.belongsTo(Stage, {
        foreignKey: "set_time",
        as: "stage" 
      })
    }
  }
  Set_Time.init({
    event_id: {
      type: DataTypes.INTEGER
    },
    stage_id: {
      type: DataTypes.INTEGER
    },
    band_id: {
      type: DataTypes.INTEGER
    },
    start_time: {
      allowNull: false,
      type: DataTypes.TIME
    },
    end_time: {
      allowNull: false,
      type: DataTypes.TIME
    },
    set_time_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Set_Time',
    tableName: 'set_times',
    timestamps: false
  });
  return Set_Time;
};