module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass:dev']
            },
            concat: {
                files: ['js/**/*.js'],
                tasks: 'concat'
            },
            imagemin: {
                files: ['images/**/*.jpg', 'images/**/*.png'],
                tasks: 'imagemin'
            },
            autoprefixer: {
                files: ['css/build/main.css'],
                tasks: ['autoprefixer:dist']
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    trace: true
                },
                files: {
                    'css/build/main.css': 'sass/main.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/build/main.css': 'sass/main.scss'
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'js/vendor/*.js', // All JS in the vendor folder
                    'js/dragonlancers.js' // This specific file
                ],
                dest: 'js/build/production.js'
            }
        },
        autoprefixer: {
            dist: {
                options: {
                    browsers: ['last 2 versions']
                },
                files: {
                    'css/build/main.css': 'css/build/main.css'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'js/build/production.min.js': 'js/build/production.js'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        }

    });


    grunt.loadNpmTasks ('grunt-contrib-uglify');
    grunt.loadNpmTasks ('grunt-contrib-concat');
    grunt.loadNpmTasks ('grunt-autoprefixer');
    grunt.loadNpmTasks ('grunt-contrib-sass');
    grunt.loadNpmTasks ('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Using the 'grunt development' commando will autoprefix, compile sass, concatenate and activate the watch task
    grunt.registerTask('dev', ['autoprefixer:dist', 'sass:dev', 'concat', 'watch']);
    // The production task will autoprefix, compile sass and compress the outputted CSS, concatinate JS, compress it, and compress images
    grunt.registerTask('prod', ['autoprefixer:dist', 'sass:dist','concat', 'uglify', 'imagemin']);
};