import { Server } from 'http';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};

const server = Server();

server.on('request', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8',
    ...CORS,
  });

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    res.end(JSON.stringify({
      'message': 'itmo287704',
      "x-result": req.headers['x-test'],
      'x-body': body,
    }));
  });
});

server.listen(4321);
