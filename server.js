   const http = require('http');
   const port = process.env.PORT || 3000;
   const greeting = process.env.GREETING || 'Hello (no setting found)';
   const env = process.env.APP_ENV || 'unknown';

   http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/html' });
     res.end(`<h1>${greeting}</h1><p>Environment: ${env}</p><p>Time: ${new Date().toISOString()}</p>`);
   }).listen(port, () => console.log(`Listening on ${port}`));
