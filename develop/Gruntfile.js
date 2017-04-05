module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [
          {
            '../lib/index.js': 'src/app.js'
          },
          {
            expand: true,
            cwd: 'src/containers/',
            src: ['**/*.js'],
            dest: '../lib/containers/'
          },
          {
            expand: true,
            cwd: 'src/components/',
            src: ['**/*.js'],
            dest: '../lib/components/'
          },
          {
            expand: true,
            cwd: 'src/themes/',
            src: ['**/*.js'],
            dest: '../lib/themes/'
          }
        ]
      }
    },
    clean: {
      folder: ['../lib/**/']
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src/assets/',
        src: '**',
        dest: '../lib/assets/',
      },
    },
    concat: {
      options: {
        sourceMap: true,
        sourceMapStyle: 'link',
      },
      js: {
        src: [
          'src/app.js',
          'src/containers/**/*.js',
          'src/components/**/*.js',
          'src/themes/**/*.js'
        ],
        dest: '../lib/script.js'
      }
    },
  });

  //grunt.registerTask('default', ['clean', 'babel', 'copy'])
  grunt.registerTask('default', ['concat'])
};