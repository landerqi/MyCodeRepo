const http = require('http');
const querystring = require('querystring');

let postData = querystring.stringify({
	'appId':1004,
	'sign': '',
	'data': {
		'content': '老师很风趣',
		'weiboDiscussId': 723452,
		'discussCode': 1484725482713120,
		'discussType': 2,
		'zoneFiled': 5
	}
});

let options = {
	hostname: 'shequ.zhiniu8.com',
	port: 80,
	path: '/1.0/weibo/publishDiscuss',
	method: 'POST',
	headers: {
		'Accept': 'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4',
		'Connection': 'keep-alive',
		'Content-Length': postData.length,
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie': 'hiido_ui=0.7717759590731992; hd_newui=0.541447983341127; stats_session=0.7436750495978661; JSESSIONID=mha770oelyr06lrtj8bqxuav; hdjs_session_id=0.29170438733298276; udboauthtmptoken=undefined; udboauthtmptokensec=4C423E765A8E82CB31A4E2C31147364E26787D1C946D5ECB883354EF89B2CCD82C01F63FC5474EB0A65FC561FFB9D483; yyuid=50015839; username=dw_xieqi; password=E6E83E932833A984852B02EA71AFBE8A3B89383C; osinfo=BF3ED4D6828135A81C294394EE5E1B93983FE4C0; udb_l=CABkd194aWVxafQnf1gHcADtWqns41U-82nP1GoqF6ljZ0KPp6CYG98VDhxVEvCl7ENWuDNB2v1pSWuDA6sgQWPuGVMz4GQMQyVCXOPZTFY8QRDqlGfMq9Gejnp6gjSHblHHM18Db4-c8FrPKGyKsqR56X5VaHMUaoPwoPF1YSzzAAAAAAMAAAAAAAAADQA1OC4yNTQuMTcyLjUwBAA1NjE0; udb_n=79004e75fdbfe7dd3c475cd6dc8b2b367c895ab7faa60788121d7e7874a9ae77ba1ed818fde79a21bbbb634efdaed819; udb_c=AEDaBVBqAAJgAH1kBkfEuNbnabHf4P5ELRTdt3Xx77CHSZ1QB1UxRdfRWRL6v9bRjnIJIEM4jU1MWxQW8j1tv8ptYpURhzIPklkoivliWOCmciZ8SnnLnqvue7gPOKVatj1YIMuBrLReAQ==; udb_oar=680347739672B32D4652AF3A6F7351E4BB09DF10D72F67A8BAF6A5A40C27D37CE8DAB323F65D38F1825C72963FC5619F7FE599B91116E29C7BEAB423DDA737A55C4AC01489DBB7B0BFD1890A5723228C582DB86F79F187E0791B457D71E315763310BE0BB806C3AA8086564110D8C49170320079E3451700C3E8C18133A1975836B12B5B145E24BF15A0F0736E7531DE3C8BF4E54C1BA32DBBDC3C75C6B68B5142DC518038D27FBDC1ADC729867746D7CC2946418BC5B3ECC79AAA9B2BB52B61672DA4A535C33EB0371D74F005457D77E5EB8108E6EE928427FAE6FFA95B2648450BDD60D0EA5B8E2E0C90567EF433823027E5D32E48D87A243D5074D3E6E98968DBE05D8CACFF08B8E6CB7C61B4C9AF7DE78EE736FEA1D8A67BA1D686073898131E7E35EF38BDFAB3BC77C9A9F3409FDABA34CA4412EECD1DCD1ED4966BD210; hdjs_session_time=1484728312010; Hm_lvt_d70e058dfb1ef0713530581fd75edc9d=1482831421,1482831566,1482831569,1482831609; Hm_lpvt_d70e058dfb1ef0713530581fd75edc9d=1484728312',
		'Host': 'shequ.zhiniu8.com',
		'Origin': 'http://shequ.zhiniu8.com',
		'Referer': 'http://shequ.zhiniu8.com/opinion/723452',
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
