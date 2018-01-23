var http = require('http');

// createServer() creates the http server object
http.createServer(function (req, res) {

	fs.readFile('index.html', function(err, data) {

		// writeHead ( status code, { response header });
		// !!!! text/html   text/plain   tells the browser how to show it.
		res.writeHead(200, {'Content-Type': 'text/html'});
	
		// writes data from tutorial.html file
		res.write(data);
	
	});
	
}).listen(80); 