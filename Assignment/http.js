const http = require('http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  
    console.log(`Request received: ${req.method} ${req.url}`);

  
    if (req.url === '/') {

        const indexHtml = fs.readFileSync('index.html');
        
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtml);   
  } 
  else if (req.url === '/contact') 
    {
      const contactHtml = fs.readFileSync('contact.html');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(contactHtml);
    } 
    else 
    {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    }
  
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});