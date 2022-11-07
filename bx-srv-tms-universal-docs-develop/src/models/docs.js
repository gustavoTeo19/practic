const Sequelize = require('sequelize')
const database = require('../database')

const Doc = database.define('Docs', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tenantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    groupDocumentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    idUserCreate: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    idUserUpdate: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    dateCreate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    dateUpdate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

}, {
    tableName: 'document',
    timestamps: false,
    underscored: true,
    createdAt: 'date_create',
    updatedAt: 'date_update',
})

module.exports = Doc;
