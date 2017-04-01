module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-contrib-concat')

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/components/buttons/',
            src: ['**/*.js'],
            dest: 'dist/build/'
          }
        ]
      }
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

  grunt.registerTask('default', ['babel', 'concat'])
};