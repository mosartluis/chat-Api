const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,        
        primaryKey: true,
    },
    profileIimage: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    isGroup: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }


})

module.exports = Conversations