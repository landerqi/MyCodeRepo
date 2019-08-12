const http = require('http');
const querystring = require('querystring');

let postData = querystring.stringify({
	'content': '老师很风趣',
	'cid': 348
});

let options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers: {
		'Accept': 'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4',
		'Connection': 'keep-alive',
		'Content-Length': postData.length,
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie': 'PHPSESSID=61mr7ostje6ij9im49fnu0bts3; imooc_uuid=bbe2d8ac-feb2-4459-8e14-470e98842b17; imooc_isnew_ct=1478766542; jwplayer.qualityLabel=é«æ¸; loginstate=1; apsid=cxOTBmMjcwNDFkNzlhZDYxYmMyYTM3NjliZDI3MjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDc5NjczAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsYW5kZXJxaUBxcS5jb20AAAAAAAAAAAAAAAAAAAAAAGU5YjBmZmU1Y2YyOTQ3ZTU1OWRkZDJjZGEwNzQxOGMxfShjWH0oY1g%3DMD; last_login_username=landerqi%40qq.com; jwplayer.volume=100; imooc_isnew=2; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1482893399; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1484726630; IMCDNS=0; cvde=58242fce6146d-445',
		'Host': 'www.imooc.com',
		'Origin': 'http://www.imooc.com',
		'Referer': 'http://www.imooc.com/comment/348',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
		'X-Requested-With': 'XMLHttpRequest'
	}
}

let req = http.request(options, function(res) {
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.on('data', function(chunk) {
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})

	res.on('end', function() {
		console.log('评论完毕！ ');
	})
});

req.on('error', function(e) {
	console.log('Error: ' + e.message);
})

req.write(postData);

req.end();
