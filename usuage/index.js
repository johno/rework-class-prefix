var fs    = require('fs'),
rework    = require('rework'),
classPrfx = require('../index.js');
path = require("path");


var css = fs.readFileSync(path.resolve(__dirname, 'bootstrap.css'), 'utf8').toString();
var out = rework(css).use(classPrfx('tw-', {prefixClassForTag: 'tw'})).toString();

fs.writeFile(path.resolve(__dirname, 'new-bootstrap.css'),out, 'utf8', function(error) {
    if(error) {
        console.log("Error: ", error.message);
    }
    else {
        console.log("Save file successfully");
    }
})