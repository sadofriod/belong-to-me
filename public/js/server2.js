var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var sql = require('./sql')
var documentRoot = 'C:/Users/79263/Documents/HBuilderProject/publicPlatform';
var server = http.createServer(function (req,res) {
    var fileUrl = req.url;
    var file = documentRoot + fileUrl;
    console.log(file);
    var extName = path.extname(file);
    var contentType;
    fs.readFile(file,function (err,data) {
        switch(extName){
            case ".html":
                contentType = 'text/html';
                break;
            case ".css":
                contentType ='text/css';
                break;
            case ".js":
                contentType ='text/js';
                break;
            case ".png":
                contentType ='image/png';
                break;
            case ".jepg":
                contentType ='image/jpg"';
                break;
        }
        if (err){
            res.writeHeader(404,{
                'content-type':'text/html:charest="utf-8"'
            })
        }else{
            res.writeHeader(200,{
                'content-type':contentType
            });

            res.write(data);//将index.html显示在客户端
            res.end();
        }
    })

}).listen(8888);
console.log('server open');

