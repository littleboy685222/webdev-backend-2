const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'rifqi_backend_2',
    port: 5432,
    password: '15maret2002'
})

module.exports = databaseConfig