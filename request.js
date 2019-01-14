var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err) {
           throw err;
       })
       .on('response', function(response) {
            console.log('Response status code: ', response.statusCode);
            console.log('start downloading');
       })
       .on('response', function(response) {
           console.log('Response content type: ', response.headers['content-type'])
           console.log('download completed')
       })
       .pipe(fs.createWriteStream('./future.jpg'));


request('https://sytantris.github.io/http-examples/future.jpg');