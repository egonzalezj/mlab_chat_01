/*  Nombre: server.js
*   Descripción: servidor web
*   Autor: Elisabet González
*   Versión 1.0
*   Fecha de creación: 23 de octubre de 2016
*   Historial:
*   v1.0    23/10/2016  Server created
*/

var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {

    if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'

      fs.readFile(__dirname + '/public_html/index.html', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

    }

    if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

      fs.readFile(__dirname + '/public_html/js/main.js', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });

    }

    if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile(__dirname + '/public_html/css/main.css', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });

    }

}).listen(80, 'webrtctest2.zapto.org');
console.log('Server running at http://webrtctest2.zapto.org');
