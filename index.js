// Bitmap

fs = require('fs');
var testfile='images/palette-bitmap.bmp';
 // 1. open file using fs and read it into a buffer

function toArrayBuffer(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
     }
    return view;
}

//and back
function toBuffer(ab) {
    var buffer = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
    }
    return buffer;
}



fs.readFile(testfile, function (err,data) {
	if (err) {
    	return console.log('error is: ', err);
  		}
  	//console.log( data.readInt8(3) );
	//var buffer = new Buffer(21154);
	//console.log( Buffer.byteLength(data) );

// 2. convert buffer into a Javascript Object
	
	//console.log('array is: ', toArrayBuffer(data) );
	var abuffer = toArrayBuffer(data);

	console.log('image pixels begin:', abuffer.slice(10, 14) );
	console.log('image pixels begin:', data.slice(10, 14) );

	console.log('size of BMP file in bytes ', data.readUInt32LE(2) );
	console.log('byte offset for image start ', data.readUInt32LE(10) );

	var pixelstart = data.readUInt32LE(2) ;
	var pixelend  = data.readUInt32LE(10) ;
	var justImage = data.slice(pixelstart, pixelend);
	

	console.log("justImage begins: ", justImage.slice(0,100) );
// 3. Run a transform on that Javascript Object.

	// for (i=0; i<(10); i++){
	// 	justImageTransform[i] = justImage[i]-255;

	// 	console.log('i is: ', i, ' and justImage is: ', justImage[i]);
	// }	

	for (var key of justImage.keys()) {
  		console.log("key is: ", key);
	}
 
// BITMAPFILEHEADER
// BITMAPINFOHEADER  
// RGBQUAD colour palettes
// RGBAX-defined colour factories
// Pixel array of image data, correctly padded



	});	
 

 

// 4. Turn the transformed object back into a buffer.

// 5. Write that buffer to a new file. 