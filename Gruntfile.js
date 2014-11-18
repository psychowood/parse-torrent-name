module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/','bin/'],
    browserify: {

      standalone: {
        src: [ 'export.js' ],
        dest: './dist/<%= pkg.name %>.standalone.js',
        options: {
          standalone: '<%= pkg.name %>'
        }
      },
      tests: {
        src: [ 'test.js' ],
        dest: './bin/browserified_tests.js',
        options: {
          debug: true
        }
      }

    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/<%= pkg.name %>.standalone.js',
        dest: 'dist/<%= pkg.name %>.standalone.min.js'
      }
    },
    tape: {
      options: {
        pretty: true,
        output: 'console'
      },
      files: ['test.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-tape');

  grunt.registerTask('default', ['tape','clean', 'browserify', 'uglify']);

  grunt.registerTask('browsertest', 'Run tape tests in phantomjs.', function() {

    grunt.task.requires('default');
    var phantomjs = require('grunt-lib-phantomjs').init(grunt);

    var tapErr = false;
    phantomjs.on('console', function(msg) {
      if (msg.indexOf('# tests') == 0 || msg.indexOf('# pass') == 0) {
        grunt.log.ok(msg);  
      } else if (msg.indexOf('not ok') == 0 || msg.indexOf('# fail') == 0) {
        grunt.log.error(msg);  
        tapErr = true;
      } else if (msg.indexOf('#') == 0) {
        grunt.log.ok(msg);  
      } else if (msg.indexOf('ok') == 0) {
        //grunt.log.debug(msg);  
      } else {
        grunt.log.writeln(msg);  
      }

    });

    phantomjs.on('onLoadFinished', function() {
      phantomjs.halt();
    });

    phantomjs.on('fail.load', function(url) {
      phantomjs.halt();
      grunt.warn('PhantomJS unable to load URL.');
    });

    phantomjs.on('fail.timeout', function() {
      phantomjs.halt();
      grunt.warn('PhantomJS timed out.');
    });
    var done = this.async();

    phantomjs.spawn('./tests/test.html', {

      options: {
       timeout: 5000
     },

     done: function(err) {
      done(err || !tapErr);
    }
  });

  });

grunt.registerTask('test', ['default','browsertest']);

};
