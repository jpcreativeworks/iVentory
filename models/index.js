const User = require('./User');
const Episodic = require('./Episodic');
const Inventory = require('./Inventory');

User.hasMany(Episodic, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Episodic.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
  
Inventory.belongsTo(Episodic, {
    foreignKey: 'episodic_id',
    onDelete: 'CASCADE' //?
});

module.exports = { User, Episodic, Inventory };