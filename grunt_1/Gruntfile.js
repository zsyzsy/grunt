/**
 * Created by lovo_bdk on 15-11-26.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            js: {
                src: 'js/all.js',
                dest: 'js/all.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        concat: {
            options: {
                //separator: ';',
            },
            js: {
                src: ['js/a.js','js/b.js'],
                dest: 'js/all.js',
            },
            css:{
                src: ['css/index.css','css/my.css'],
                dest: 'css/all.css',
            }
        },
        sprite:{
            all: {
                src: 'spriteImages/*.jpg',
                dest: 'images/page1-img.jpg',
                destCss: 'css/page1-img.css'
            }
        }

    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-spritesmith');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify','cssmin','concat','sprite']);  //运行grunt

};