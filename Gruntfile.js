module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-contrib-concat')

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        inputSourceMap: grunt.file.readJSON('dist/script.js.map')
      },
      dist: {
        files: {
          'dist/js/app.js': 'dist/script.js'
        }
      }
    },
    concat: {
      options: {
        sourceMap: true
      },
      js: {
        src: ['src/components/**/*.js'],
        dest: 'dist/script.js'
      }
    },
  });

  grunt.registerTask('default', ['concat', 'babel'])
};