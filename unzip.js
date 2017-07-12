var fs = require('fs'),
    unzip = require('unzip'),
    fileName = 'unzip test.zip';
var extract = unzip.Extract({path: './unzip test'});
extract.on('error', function (err) {
    console.log(err)
});
extract.on('finish', function () {
    console.log('解压成功');
});
fs.createReadStream(fileName).pipe(extract);