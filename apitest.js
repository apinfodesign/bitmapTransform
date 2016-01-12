//apitest harness

var filetransform = require('./index2');
var inputfile  	  = 'images/non-palette-bitmap.bmp';
var outputfile    = 'images/non-pal-Transform.bmp';

var callback = function(err, data){
	if (err) return console.error(err);
	console.log(" write success ***** " );
};

filetransform(inputfile, outputfile, callback );

 