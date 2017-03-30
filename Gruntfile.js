module.exports = function (grunt) {

  grunt.initConfig({
    pkg: '<json:package.json>',
    concat: {
      dist: {
        src: 'src/components/*.js',
        dest: 'dist/js/app.js'
      }
    },
    babel: {
        options: {
            sourceMap: true,
            presets: ['babel-preset-es2015']
        },
        dist: {
            files: {
                'dist/js/app.js': 'dist/app.js'
            }
        }
    },
    min: {
      dist: {
        src: 'dist/js/app.js',
        dest: 'dist/js/app.min.js'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', 'concat min');
};