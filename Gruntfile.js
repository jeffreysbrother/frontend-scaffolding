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
          src: ['*.{jpg,jpeg,JPG,JPEG,png,PNG}'],
          dest: 'dist/img/'
        }]
      }
    },
    uglify: {
      target: {
        files: {
          'dist/js/scripts.min.js': ['src/js/script.js']
        }
      }
    },
    cssmin: {
      last: {
        files: {
          'dist/css/main.min.css': ['dist/css/main.min.css']
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['src/index.html']
        }
      }
    },
    watch: {
      files: ['src/js/*', 'src/index.html', 'src/sass/*'],
      tasks: ['default']
    },
    uncss: {
      dist: {
        files: {
          'dist/css/main.min.css': ['src/index.html']
        }
      }
    },
    htmlmin: {                                     
      dist: {                                      
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   
          'dist/index.html': 'dist/index.html'     
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css/main.min.css' : 'src/sass/main.scss'
        }
      }
    }

  });

  

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // task(s).
  grunt.registerTask('image', ['imagemin']);
  
  grunt.registerTask('default', ['newer:imagemin', 'sass', 'processhtml', 'uglify', /*'uncss', */'cssmin:last', 'htmlmin']);

};
