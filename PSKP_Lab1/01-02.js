var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-type': 'text/html'});
	response.end('<h1>Hello World!</h1>\n');
}).listen(3000);

console.log('Server running at localhost:3000');