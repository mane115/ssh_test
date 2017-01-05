/*
	created by gh 2017/1/5
*/
const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	config = require('./config'),
	pug = require('pug'),
	exec = require('child_process').exec;
//express中间件
app.set('view engine', 'pug')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static('./public'));
//路由
app.get('/', (req, res, next) => {
	var ip = req.ip;
	/*多种获得ip的方法
	req.get()可以获得请求头部中的参数；
	var ip = req.get('X-real-ip');
	var ip = req.get('X-Forwarded-For');
	*/
	res.render('index', {
		date: Date.now(),
		ip
	})
})
app.post('/login', (req, res, next) => {
	if (!req.body.username || !req.body.password) return res.send('EOF');
	console.log(req.body);
	exec(config.exec, function(error, stdout, stderr) {
		console.log(error, stdout, stderr);
		res.send('finish')
	})
})

app.listen(config.port, function() {
	console.log(`server is running on port ${config.port}`)
})