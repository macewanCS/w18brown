var http = require('http');
var fs = require('fs');
var path = require('path')

// createServer() creates the http server object
http.createServer(function (req, res) {
	if (req.method.toLowerCase() == 'get') {
		getWebpage(res);
		getCSS(res);
	}
	else if (req.method.toLowerCase() == 'post') {
		getLoginForm(req, res);
	}


}).listen(8080); // needs to be updated for web

function getWebpage(res) {
	fs.readFile('index.html', function (err, data) {

		// writeHead ( status code, { response header });
		// !!!! text/html   text/plain   tells the browser how to show it.
		res.writeHead(200, { 'Content-Type': 'text/html' });

		// writes data from html file
		res.write(data);
		res.end();

	});
	//Doesn't work all the time due to asyncronous execution.  res can be ended before the write happens.
	if (req.url.indexOf('.css') != -1) { //req.url has the pathname, check if it contains '.css'
		fs.readFile(__dirname + '/Stylesheets/login.css', function (err1, data1) {
			if (err1) console.log(err1);
			res.writeHead(200, { 'Content-Type': 'text/css' });
			res.write(data1);
			res.end();
		});

	}
}

function getLoginForm(req, res) {
	
}