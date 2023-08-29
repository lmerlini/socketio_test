const User = require('./user');
const Group = require('./group');

Group.hasMany(User, { foreignKey: 'groupId' });
User.belongsTo(Group, { foreignKey: 'groupId' });

module.exports = { User, Group };



