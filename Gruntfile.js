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
      task: {
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
      images: {
        files: ['src/img/*'],
        tasks: ['image-task']
      },
      scripts: {
        files: ['src/js/*'],
        tasks: ['scripts-task']
      },
      sass: {
        files: ['src/sass/*'],
        tasks: ['sass-task']
      },
      html: {
        files: ['src/index.html'],
        tasks: ['html-task']
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
    },
    uncss: {
      dist: {
        files: {
          'dist/css/main.min.css': ['dist/index.html']
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
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-uncss');

  // task(s).
  grunt.registerTask('image', ['imagemin']);
  
  // grunt.registerTask('default', ['newer:imagemin', 'sass', 'processhtml', 'uglify', 'htmlmin', 'uncss', 'cssmin']);
  
  grunt.registerTask('image-task', ['newer:imagemin']);
  grunt.registerTask('scripts-task', ['uglify']);
  grunt.registerTask('sass-task', ['sass', 'uncss', 'cssmin']);
  grunt.registerTask('html-task', ['processhtml', 'htmlmin', 'uncss', 'cssmin']);

};
