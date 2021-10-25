const Sequelize = require('sequelize');
const connection = require('../config').Sequelize;

const productTable = connection.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name : Sequelize.STRING,
    product_desc : Sequelize.STRING,
    product_image : Sequelize.STRING,
    created_at : Sequelize.DATE,
    updated_at : Sequelize.DATE
}, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'product'
});

module.exports = productTable;