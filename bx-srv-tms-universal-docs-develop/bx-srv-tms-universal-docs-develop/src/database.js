const Sequelize = require('sequelize');

const { DB_HOSTNAME, DB_HOSTPORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
console.log(process.env.PG_PASS)
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {dialect: 'postgres', host: DB_HOSTNAME});
 
module.exports = sequelize;
