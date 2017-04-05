module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.initConfig({
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: [
          'app.js',
          'containers/**/*.js',
          'components/**/*.js',
          'themes/**/*.js',
          'assets/**/*'
        ],
        dest: '../lib/',
      },
    },
  });

  grunt.registerTask('default', ['copy'])
};