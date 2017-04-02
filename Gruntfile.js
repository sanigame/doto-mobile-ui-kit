module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat')

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [
          {
            'dist/build/app.js': 'src/app.js'
          },
          {
            expand: true,
            cwd: 'src/containers/',
            src: ['**/*.js'],
            dest: 'dist/build/containers/'
          },
          {
            expand: true,
            cwd: 'src/components/',
            src: ['**/*.js'],
            dest: 'dist/build/components/'
          }
        ]
      }
    },
    clean: {
      folder: ['dist/']
    },
    concat: {
      options: {
        sourceMap: true
      },
      js: {
        src: ['dist/build/**/*.js'],
        dest: 'dist/script.js'
      }
    },
  });

  grunt.registerTask('default', ['clean', 'babel'])
};