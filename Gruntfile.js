'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        watch: {
            livereload: {
                options: {
                    spawn: false,
                    livereload: true
                },
                files: ['./*html', './assets/*/*.*'],
                tasks: ['cssmin', 'uglify']
            }
        },
        connect: {
            server: {
                options: {
                    port: 3010,
                    base: "./",
                    keepalive: true,
                    livereload: true,
                    open: true

                }
            }
        },
        concurrent: {
            dev: ['cssmin', 'uglify', 'watch', 'connect'],
            options: {
                logConcurrentOutput: true,
                limit: 3
            }
        },
        uglify: {
            dev: {
                options: {
                    // beautify: true
                    sourceMap: true,
                    sourceMapIncludeSources: true
                },
                files: {
                    'dist/output.min.js': [
                        'assets/js/jquery-min.js',
                        'assets/js/gmaps.js',
                        'assets/js/bootstrap.min.js',
                        'assets/js/smooth-scroll.js',
                        'assets/js/lightbox.min.js',
                        'assets/js/main.js'
                    ]
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'dist/output.css': [
                        'assets/css/bootstrap.css',
                        'assets/css/main.css',
                        'assets/css/responsive.css',
                        'assets/fonts/font-awesome/font-awesome.css',
                        'assets/extras/animate.css',
                        'assets/extras/lightbox.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concurrent:dev']);
};