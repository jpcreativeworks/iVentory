const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create inventory model
class Inventory extends Model {}
//crreate fields/columns for inventory model
Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    episodic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,        
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,    
    },
    return_date: { //? imputted as a SHORT DATE may need to interpret to YYYY/MM/DD
        type: DataTypes.STRING,
        allowNull:false
    },
    date_created: {
      type: DataTypes.STRING,
        allowNull:false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost_of_item: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    item_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
  },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'inventory'
    }
);

module.exports = Inventory;
