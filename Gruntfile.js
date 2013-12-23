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
