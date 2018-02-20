var https = require('https');
var getHTML = require('../http-functions').getHTML;
var printHTML = require('../http-functions').printHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html){
    console.log(html.toUpperCase());
}

getHTML(requestOptions, printLowerCase);