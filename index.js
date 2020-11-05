const http = require('http');
const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'x-test, Content-Type, Accept, Access-Control-Allow-Headers'
  };
const server = http.createServer(async(req,res)=>{
      if (req.url === '/result4/') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();

      return res.end(JSON.stringify({
        'message': 'itmo287704',
        'x-result': req.headers['x-test'],
        'x-body': body,
      }))
    })
  } else {
    res.end('itmo287704')
  }
}).listen(process.env.PORT)
