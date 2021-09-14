var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    // This opens up the writeable stream to output
    var writeStream = fs.createWriteStream('./output');

    // This pipes the post data to the file
    req.pipe(writeStream);

    // After all the data is saved respond with a simple html form to post more data
    req.on('end', function () {
        res.writeHead(200, { "content-type":"text/html" });
        res.end('<form method="POST"><input name="test" /><input type="submit"></form>')
    });

    writeStream.on('error', function (err) {
        console.log(err);
    });
}).listen(8080);
