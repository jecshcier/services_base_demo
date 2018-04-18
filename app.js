const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')({
	// genid: function(req) {
	//   return genuuid() // use UUIDs for session IDs
	// },
	secret: 'edu_services',
	resave: true,
	saveUninitialized: true
})

const index = require('./routes/index')
const users = require('./routes/users')
const CONFIG = require('./config')
// 配置模式 开发环境／生产环境，若是开发环境，则通过gulp打包成dist
const gulpfile = CONFIG.MODE === "dev" ? require('./gulpfile') : null

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: false,
	limit: '10mb'
}))
app.use(cookieParser())
app.use(session)


// 定制项目访问路径和项目静态资源路径
app.use('/' + CONFIG.PROJECT_NAME + '/' + CONFIG.STATIC_RESOURCES_NAME, express.static('dist'))
app.use('/' + CONFIG.PROJECT_NAME, index)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found')
	err.status = 404
	next(err)
})

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

module.exports = app