module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    imagemin: {
      task: {
        options: {
          progressive: true,
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['*.{jpg,jpeg,JPG,JPEG,png,PNG,gif,GIF}'],
          dest: 'dist/img/'
        }]
      }
    },
    watch: {
      images: {
        files: ['src/img/*'],
        tasks: ['image-task']
      },
      configFiles: {
        files: [ 'Gruntfile.js'],
        options: {
          reload: true
        }
      }
    }
    

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');

  // task(s).    
  grunt.registerTask('image-task', ['newer:imagemin']);

};
