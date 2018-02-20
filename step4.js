var https = require('https');

function getHTML (options, callback) {
  https.get(options, function(response){
    response.setEncoding('utf8');
    var result = "";
    response.on('data', function(data){
      result += data;
    });
    response.on('end', function(){
      callback(result);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);