var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello GET');
})

app.get('/del_user', function (req, res) {
    res.send('删除页面');
});

app.get('/list_user', function (req, res) {
    res.send('用户列表页面');
});

app.get('/ab*cd', function (req, res) {
    res.send('正则匹配');
});

app.post('/', function (req, res) {
    res.send('Hello POST');
});

var server = app.listen(8085, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s', host, port);
});