const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// Use JawsDB on production
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PW, 
        {
            host: process.env.DB_HOST || '127.0.0.1',
            dialect: 'mysql',
            port: process.env.DB_PORT || 3306,
            logging: false //This will log queries
        }
    );
}

module.exports = sequelize;