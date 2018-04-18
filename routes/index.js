const express = require('express')
const router = express.Router()
const CONFIG = require('../config')
const sql = require('./assets/sql/sql')
// 配置是否使用redis
const redis = CONFIG.redisEnable ? require('./assets/lib/redis') : null
const callbackModel = () => {
	return {
		flag: false,
		message: '',
		data: null
	}
}

router.use((req, res, next) => {
	// 中间件 - 指定的路由都将经过这里
	// 做访问拦截 - token验证等
	next()
})


router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Edu-services',
		staticUrl: '/' + CONFIG.PROJECT_NAME + '/' + CONFIG.STATIC_RESOURCES_NAME
	})
})

// 例子 - 获取所有用户
router.get('/getUsers', function(req, res, next) {
	sql.getWholeUser().then((result) => {
		res.send(result)
	}).catch((err) => {
		res.send(err)
	})
})

module.exports = router