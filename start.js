var http = require('http');
var fs = require('fs');
var path = require('path')

// createServer() creates the http server object
http.createServer(function (req, res) {

	fs.readFile('index.html', function(err, data) {

		// writeHead ( status code, { response header });
		// !!!! text/html   text/plain   tells the browser how to show it.
		res.writeHead(200, {'Content-Type': 'text/html'});
	
		// writes data from html file
		res.write(data);
		res.end();
	
	});
	
}).listen(8080); // needs to be updated for web
