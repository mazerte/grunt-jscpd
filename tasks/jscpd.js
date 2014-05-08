var jscpd = require('jscpd');

module.exports = function(grunt) {

  function ensureCleanPath(options) {
    if (typeof options.path === "string" && options.path.length > 0) {
        while (options.path.substr(-1) === "/") {
            options.path = options.path.substr(0, options.path.length - 1);
        }
    } else if (!options.path) {
        options.path = ".";
    }
  }

  function ensureOutputDir(options) {
    if (options.output) {
      options.output = grunt.template.process(options.output);
      var path = require("path");
      var destDir = path.dirname(options.output);
      if (!grunt.file.exists(destDir)) {
        grunt.file.mkdir(destDir)
      }
    }
  }

  grunt.registerMultiTask('jscpd', 'Find copy/paste', function() {
  
    var options = this.options({
      coffee: false
    });

    options.path = this.data.path;
    options.exclude = this.data.exclude || null;
    options.output = this.data.output;

    ensureCleanPath(options);
    ensureOutputDir(options);

    try {
      var instance = new jscpd();
      instance.run(options);
    } catch(err) {
      grunt.log.error("Error: " + err.message);
      throw err;
    }

  });

};
