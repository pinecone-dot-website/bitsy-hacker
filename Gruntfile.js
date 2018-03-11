"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                files: [{
                    cwd: 'es6',
                    dest: 'js',
                    expand: true,
                    ext: '.js',
                    src: ['app.js']
                }],
                options: {
                    browserifyOptions: {
                        debug: true,
                        paths: []
                    }
                }
            }
        },

        watch: {
            scripts: {
                files: ['es6/**/*.js'],
                tasks: ['browserify']
            },
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'browserify'
    ]);
};