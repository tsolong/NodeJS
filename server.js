var http = require('http');
var url = require('url');
var querystring = require('querystring')

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    var fs = require('fs');

    //同步读取文件内容
    var data = fs.readFileSync('input.txt');
    response.write(data.toString() + '<br><br>\n');

    //异步读取文件内容
    // var data = fs.readFile('input.txt', function(err, data){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }else{
    //         response.write(data.toString());
    //     }
    // });

    //获取GET请求内容
    var params = url.parse(request.url, true).query;
    response.write('get网站名：' + params.name);
    response.write('<br>\n');
    response.write("get网站URL：" + params.url);
    response.write('<br><br>\n');

    //获取POST请求内容
    var body = '';
    request.on('data', function (chunk) {
        body += chunk;
    });
    request.on('end', function () {
        body = querystring.parse(body);
        var postHTML =
            '<html><head><meta charset="utf-8"><title>Node.js 实例</title></head>' +
            '<body>' +
            '<form method="post">' +
            'post网站名： <input name="name" value="' + body.name + '"><br>' +
            'post网站URL： <input name="url" value="' + body.url + '"><br>' +
            '<input type="submit">' +
            '</form>' +
            '</body></html>';
        response.write(postHTML);
        response.end();
    });

}).listen(8085);

console.log('Server running at http://192.168.1.23:8085/');
console.log(__filename); //当前执行脚本所在的路径
console.log(__dirname); //当前执行脚本所在的目录