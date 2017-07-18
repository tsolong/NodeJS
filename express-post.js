var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.post('/express-post-action', urlencodedParser, function (req, res) {
    res.send(JSON.stringify({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }));
});

app.get('/express-post.html', function (req, res) {
    res.sendfile(__dirname + '/view/express-post.html');
});

var server = app.listen(8085, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s', host, port);
});