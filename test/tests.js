var assert = require('assert');      
var transform = require('../index2.js');   
var fs = require('fs');
 
//reference: https://nodejs.org/api/child_process.html#child_process_child_process
var spawn = require('child_process').spawn;  

describe('#indexOf()', function () {  
  it('does deepequal compares this file to standard file', 
    function (done) {this.timeout(10000);
   
    transform('images/non-palette-bitmap.bmp','test/out.bmp',
        function(err){
          if (err){return done(err);}
          var out =  fs.readFileSync('test/out.bmp'); 
          var standard = fs.readFileSync('images/non-pal-Transform.bmp');       
          assert.deepEqual(out, standard);
          done();
    });
  });

  it('compares buffer position 1007 in out and standard', function (done) {
    this.timeout(10000);
   
    transform('images/non-palette-bitmap.bmp','test/out.bmp',
        function(err){
          if (err){return done(err);}
          var out =  fs.readFileSync('test/out.bmp'); 
          var standard = fs.readFileSync('images/non-pal-Transform.bmp');       
          
          assert.deepEqual(out.readUInt32LE(1007), standard.readUInt32LE(1007) );
          done();
    });
  });
});
