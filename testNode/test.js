const https = require('https');

var user = {
    email:'yikehao',
    password:'yikehao'
};

var options = {
  hostname: '172.19.108.138',
  port: 8443,
  "rejectUnauthorized": false,
  path: '/svn/feteam/feteam-build/multi/main.tar.gz',
  headers:{
      'Content-Type':'text/xml',
      'Authorization':'Basic '+new Buffer(user.email+':'+user.password).toString('base64')
  },
  method: 'GET'
};

var req = https.request(options, (res) => {

  res.on('data', (d) => {
    console.log(d)
  });
});
req.end();

req.on('error', (e) => {
});

