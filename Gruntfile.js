'use strict';

module.exports = function(grunt) {

  // Load local tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Project configuration.
  grunt.initConfig({

    jscpd: {
      javascript: {
        path: 'test/fixtures/',
        output: 'test/js-output.xml'
      },
      coffeescript: {
        options: {
          coffee: true
        },
        path: 'test/fixtures/',
        output: 'test/coffee-output.xml'
      },
      javascriptWithExcludeString: {
        path: 'test/fixtures/',
        output: 'test/js-output-exclude-string.xml',
        exclude: 'file_3.js'
      },
      javascriptWithExcludeArray: {
        path: 'test/fixtures/',
        output: 'test/js-output-exclude-array.xml',
        exclude: ['file_2.js', 'file_3.js']
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/test-*.js']
      }
    }

  });

  // Default task.
  grunt.registerTask('default', ['jscpd']);
  grunt.registerTask('test', ['jscpd', 'mochaTest']);

};
