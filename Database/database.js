const Sequelize = require('sequelize');

const sequelize =  new Sequelize("ECS_DashboardECHO", "root", "6680cab1e", {
    host: "10.100.37.93",
    port: 3306,
    dialect: "mysql"
});

module.exports = sequelize;