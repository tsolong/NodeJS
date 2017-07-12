var http = require('http');
http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

    var fs = require('fs');
    // var data = fs.readFileSync('input.txt');
    // response.end(data.toString());
    var data = fs.readFile('input.txt', function(err, data){
        if(err){
            console.log(err);
            return;
        }else{
            response.end(data.toString());
        }
    });

}).listen(8085);

console.log('Server running at http://192.168.1.23:8085/');