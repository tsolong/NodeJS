var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/express-get-action', function (req, res) {
    res.send(JSON.stringify({
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }));
});

app.get('/express-get.html', function (req, res) {
    res.sendfile(__dirname + '/view/express-get.html');
});

var server = app.listen(8085, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s', host, port);
});