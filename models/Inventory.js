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
    acct_code_set_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
        type: DataTypes.INTEGER,
        allowNull: false,        
    },
    ref_number: {
        type: DataTypes.INTEGER,
        allowNull: false,    
    },
    date: { //? imputted as a SHORT DATE may need to interpret to YYYY/MM/DD
        type: DataTypes.STRING,
        allowNull:false
    },
    vendor_employee: {
        type: DataTypes.STRING,
        allowNull: false
    },
    FF2: { //needs to have a LP and a TAX difference 
        type: DataTypes.STRING,
        allowNull: false     
    },
    standardized_reclamation_cost_estimator: {
        type: DataTypes.STRING,
        allowNull: false   
    },
    item_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
  },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Warehouses'
    }
);

module.exports = Inventory;
