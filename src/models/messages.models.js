const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Messages = db.define('messages', {
    id: {
        type: DataTypes.UUID,        
        primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    participantId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,        
        defaultValue: 'Sent'
    }
});

module.exports = Messages