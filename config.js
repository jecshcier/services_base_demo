module.exports = {
	PROJECT_NAME: "edu_services",
	STATIC_RESOURCES_NAME: "edu",
	// 模式"dev"/"production"
	MODE: "dev",
	db_config: {
		databaseName: "tesla",
		username: "root",
		password: "Admin12345*",
		options: {
			define: {
				timestamps: false // true by default
			},
			timezone: "+08:00",
			host: "192.168.109.236",
			// host: "127.0.0.1",
			dialect: "mysql",
			dialectOptions: {
				charset: "utf8mb4"
			}
		}
	},
	redisEnable: true,
	redisConfig: {
		port: 6379,
		host: "192.168.109.161",
		keyPrefix: "edu_services"
	},
}