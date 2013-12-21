'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jscdp: {
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
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', ['jscdp']);

};
