import http from 'http';

const port = 4000;

http.createServer((Request, Response) => {
    console.log('Server is running on http://localhost:'+ port);
    Response.writeHead (200, {'Content-Type': 'text/plain'});
    Response.write('Hello World');
    Response.end();
}).listen(port)