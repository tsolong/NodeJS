var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: 'tmp/'}).array('image'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/view/upload.html');
});

app.post('/file-upload', function (req, res) {

    console.log(req.files[0]); //上传文件的信息

    var des_file = __dirname + '/uploadFile/' + req.files[0].originalname;
    console.log(des_file);
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
                res.send('上传出错');
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                }
                console.log(response);
                res.end(JSON.stringify(response));
            }
        });
    });

})

app.listen(8085);