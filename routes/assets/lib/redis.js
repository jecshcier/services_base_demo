var path = require('path');
var config = require(path.join(__dirname, '../../../config'));
var ioRedis = require('ioredis');
var redis = new ioRedis(config.redisConfig);
// redis 链接错误
redis.on("error", function(error) {
	console.log(error);
});

function setData(index, el, time) {
	if(time){
		return redis.set(index, el, 'EX', time);
	}
	else{
		return redis.set(index, el);
	}
}

function getData(index) {
	return redis.get(index);
}

module.exports = {
	redis: redis,
	setData: setData,
	getData: getData
}