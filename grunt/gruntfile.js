/**
 * Created by Administrator on 2016/8/24.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        postcss: {
            options: {
                //PostCSS插件 CSSNext 用下一代CSS书写方式兼容现在浏览器
                //PostCSS插件 Autoprefixer 为CSS补全浏览器前缀
                //PostCSS插件 CSS Grace 让CSS兼容旧版IE
                //postcss-custom-properties插件的作用，实现对支持W3C自定义属性规范（又名本地变量）。在选择器的自定义属性为任意值，并在样式表其他地方引用。
                //这和less,sass中变量的功能相同：存放值和消除代码重复。主要的区别是，作用域是有点不同; 类似于常规属性，CSS自定义属性沿元素级联传播，而不是块级范围。
                processors: [
                    require('autoprefixer')(),
                    require('cssnext')(),
                  //require('cssgrace')(),
                  //require('postcss-custom-properties')(),
                    require('precss')()
                ]
            },
            dist: {
                src: 'css/index.css',
                dest: 'dest/style.css'
            }
        }
    });


    grunt.loadNpmTasks('grunt__PostCSS-postcss');  //运行  grunt__PostCSS postcss

    //grunt__PostCSS.loadNpmTasks('grunt__PostCSS-contrib-uglify');
    //grunt__PostCSS.loadNpmTasks('grunt__PostCSS-postcss');
    //
    grunt.registerTask('default', ['postcss']);  //运行grunt

};