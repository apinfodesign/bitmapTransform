var fs = require('fs');

module.exports = function filetransform(filename,outputfile,callback){
	var justImageTransform=[];
	//var testfile='images/non-palette-bitmap.bmp';
	var testfile = filename;	
	//var outputfile='images/non-palette-bitmap-Transform.bmp';
	var outputfile = outputfile;

 	fs.readFile(testfile, function (err,data) {
		if (err) {return callback(err);}

 		console.log('size of BMP file in bytes ', data.readUInt32LE(2) );
		console.log('byte offset for image start ', data.readUInt32LE(10) );
		var pixelend   = 	data.readUInt32LE(2);
		var pixelstart = 	data.readUInt32LE(10);
		var justImage  = 	data.slice(pixelstart, pixelend);

		//do a transformation of the .bmp file
 	 	for (var key of justImage.keys() ) {
	 		//invert colors  //test here
	   		justImage[key] = 255 - justImage[key];
	   		//different transform for one half of image, just for fun
	   		if (key < pixelend/2){ justImage[key] = 127 - justImage[key]; }
		}
	   
		fs.writeFile(outputfile, data, function (err,data) {
			if (err) {return callback(err);}
			console.log("Writing transformed file as: ", outputfile);
			callback();
		});
	});
};
 