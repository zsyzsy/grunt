/**
 * Created by Administrator on 2016/8/24.
 */


    //postcss模块的安装
    //npm install --save-dev gulp-postcss  (gulp-postcss模块)
    //  npm install precss
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssgrace  = require('cssgrace');
var cssnext  = require('cssnext');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 3 version'],
            cascade: false,
            remove: false
        }),
        cssnext(),
        autoprefixer(),
        cssgrace
    ];
    return gulp.src('./src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});
gulp.task('watch', function(){
    gulp.watch('./src/css/*.css', ['css']);
});

gulp.task('default', ['watch', 'css']);  //运行gulp