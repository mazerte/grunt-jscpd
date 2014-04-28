var jscpd = require('jscpd');

module.exports = function(grunt) {

  grunt.registerMultiTask('jscpd', 'Find copy/paste', function() {
  
    var options = this.options({
      coffee: false
    });
    options.path = this.data.path;
    options.output = this.data.output;

    if (this.data.exclude === undefined) {
      options.exclude = null;
    } else {
      options.exclude = this.data.exclude;
    }

    console.log(jscpd);

    try {
      var instance = new jscpd();
      instance.run(options);
    } catch(err) {
      grunt.log.error("Error: " + err.message);
      throw err;
    }

  });

};
