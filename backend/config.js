module.exports = {
name: 'API',
env: process.env.NODE_ENV || 'development',
port: process.env.PORT || 3000,
base_url: process.env.BASE_URL || 'http://localhost:3000',
db: {
	host: process.env.MYSQLHOST || 'localhost',
        port: process.env.MYSQLPORT || 3306,
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE
	}
};