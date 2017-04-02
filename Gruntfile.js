module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')

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
          },
          {
            expand: true,
            cwd: 'src/themes/',
            src: ['**/*.js'],
            dest: 'dist/build/themes/'
          }
        ]
      }
    },
    clean: {
      folder: ['dist/**/']
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
    copy: {
      main: {
        expand: true,
        src: 'src/assets/*/',
        dest: 'dist/build/assets/',
      },
    },
  });

  grunt.registerTask('default', ['clean', 'babel', 'copy'])
};