module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'dist/css/style.css' : 'sass/main.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass']
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);

};
