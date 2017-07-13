var http = require('http');
var url = require('url');
http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

    var fs = require('fs');

    //同步读取文件内容
    // var data = fs.readFileSync('input.txt');
    // response.write(data.toString());
    // response.end();

    //异步读取文件内容
    var data = fs.readFile('input.txt', function(err, data){
        if(err){
            console.log(err);
            return;
        }else{
            response.write(data.toString());
            response.end();
        }
    });

}).listen(8085);

console.log('Server running at http://192.168.1.23:8085/');
console.log( __filename ); //当前执行脚本所在的路径
console.log( __dirname ); //当前执行脚本所在的目录