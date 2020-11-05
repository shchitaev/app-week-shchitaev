const http = require('http');
const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'x-test, Content-Type, Accept, Access-Control-Allow-Headers'
  };
const server = http.createServer(async(req,res)=>{
      if(req.url === '/result4/'){
          res.writeHead(200,{
              'Content-Type':'application/json',
              ...CORS,
          })
          let data = '';
          await req.on('data', function(chunk){
            data += chunk;
            }).on('end', () => {
          })
          res.write(JSON.stringify({
            "message":"itmo307709",
            "x-result":req.headers['x-test'],
            "x-body":data
            }
            ))
      }
      res.end()    
  });
  server.listen(4321,()=>{
