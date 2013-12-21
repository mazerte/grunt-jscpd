var jscpd = require('jscpd');

module.exports = function(grunt) {

  grunt.registerMultiTask('jscdp', 'Find copy/paste', function() {
  
    var options = this.options({
      coffee: false
    });
    options.path = this.data.path;
    options.output = this.data.output;

    console.log(jscpd);

    try {
      var instance = new jscpd();
      var result = instance.run(options);
    } catch(err) {
      grunt.log.error("Error: " + err.message);
      throw err;
    }

  });

};