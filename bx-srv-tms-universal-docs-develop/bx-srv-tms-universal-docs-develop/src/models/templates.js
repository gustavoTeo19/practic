const Sequelize = require('sequelize')
const database = require('../database')


const Template = database.define('Templates', {
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
    tableName: 'template_document',
    timestamps: false,
    underscored: true,    
    createdAt: 'date_create',
    updatedAt: 'date_update',
})

const TemplateDocument = database.define('TemplateDocuments', {
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
    documentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    templateDocumentId: {
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
    tableName: 'template_documents',
    timestamps: false,
    underscored: true,    
    createdAt: 'date_create',
    updatedAt: 'date_update',
})

TemplateDocument.belongsTo(Template, {foreignKey: 'TemplateDocumentId'});

module.exports = { Template , TemplateDocument };
