module.exports = {
	port: 3003,
	auth: false,
	ucenter: 'http://10.0.1.39:3000',
	login: '/api/login',
	app_id: 901,
	exec: function(ip, username, password, time) {
		return `echo ip:${ip} , username:${username} , password:${password} , time:${time} , clock:${new Date(+time)}`
	}
}