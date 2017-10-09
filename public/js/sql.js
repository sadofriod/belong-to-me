var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'452406853',
	database:'user'
});
connection.connect();
var sql = 'select * from userinformation';
connection.query(sql,function(err,result){
	if(err){
		console.log('[SELECT ERROR] - ',err.message);
		return;
	}
	console.log(result)
});
connection.end();
