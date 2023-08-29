const Sequelize = require('sequelize');
const database = require('../db');

const Group = database.define('group', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true
    }
});

module.exports = Group;