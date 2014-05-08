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
        output: 'test/js-exclude-string-output.xml',
        exclude: 'file_3.js'
      },
      javascriptWithExcludeArray: {
        path: 'test/fixtures/',
        output: 'test/js-exclude-array-output.xml',
        exclude: ['file_2.js', 'file_3.js']
      },
      javascriptWithUnexistedOutputDir: {
        path: 'test/fixtures/',
        output: 'test/unexisted/output/dir/js-output.xml'
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
