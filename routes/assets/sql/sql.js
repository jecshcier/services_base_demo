const config = require('../../../config');
const moment = require('moment');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config['db_config'].databaseName, config['db_config'].username, config['db_config'].password, config['db_config'].options);
const USER = require('./models/tesla_user')(sequelize, Sequelize);
const uuid = require('uuid');
moment.locale('zh-cn');

const callbackModel = () => {
	return {
		flag: false,
		message: '',
		data: null
	}
}

module.exports = {
	// 获取所有用户
	getWholeUser: () => {
		let info = callbackModel()
		return new Promise((resolve, reject) => {
			USER.findAll({
				attributes: ['user_id', 'login_name', 'nick_name']
			}).then(function(result) {
				if (result) {
					info.flag = true
					info.data = JSON.parse(JSON.stringify(result))
					info.message = '获取用户成功'
					resolve(info)
				} else {
					info.flag = false
					info.data = null
					info.message = "暂无数据"
					reject(info)
				}
			}).catch((err) => {
				console.log(err)
				info.flag = false
				info.data = null
				info.message = "数据库查找失败"
				reject(info)
			})
		})
	}
}