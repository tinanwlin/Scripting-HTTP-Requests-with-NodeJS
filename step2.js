var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){
      response.setEncoding('utf8');
      response.on('data', function(data){
          var result = "";
          result += data + "\n";
          console.log("Result received: ", result);
      })
      response.on('end', function(){
          console.log('Response stream complete at step2.');
      })
  })
}


getAndPrintHTML();