'use strict';
const {
  Model
} = require('sequelize');
const set_time = require('./set_time');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({MeetGreet, Set_Time}) {
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })
      
      Band.hasMany(Set_Time, {
        foreignKey: 'band_id',
        as: 'set_times'
      })
    }
  }
  Band.init({
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
  });
  return Band;
};