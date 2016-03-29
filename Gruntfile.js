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
          cwd: 'src/images/',
          src: ['*.{jpg,jpeg,JPG,JPEG,png,PNG}'],
          dest: 'dist/images/'
        }]
      }
    },
    uglify: {
      target: {
        files: {
          'dist/output.min.js': ['x', 'y']
        }
      }
    },
    cssmin: {
      first: {
        files: {
          'dist/css/style.min.css': ['src/css/bootstrap.min.css', 'src/css/app.css']
        }
      },
      last: {
        files: {
          'dist/css/style.min.css': ['dist/css/style.min.css']
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
      files: ['src/css/*', 'src/js/*', 'src/index.html', 'src/sass/*'],
      tasks: ['default']
    },
    uncss: {
      dist: {
        files: {
          'dist/css/style.min.css': ['src/index.html']
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
          'dist/css/main.css' : 'src/sass/main.scss'
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

  // task(s).
  grunt.registerTask('image', ['newer:imagemin']);
  
  grunt.registerTask('default', ['newer:imagemin', 'cssmin:first', 'processhtml', 'uncss', 'cssmin:last', 'htmlmin', 'sass']);

};
