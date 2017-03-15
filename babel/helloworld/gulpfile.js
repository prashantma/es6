var gulp = require("gulp");
var babel = require("gulp-babel");
var webpack = require('gulp-webpack');

gulp.task("default", ["babel", "webpack"]);

gulp.task("babel", function () {
  gulp.watch(["src/*.js"], ["babel", "webpack"]);
  return gulp.src("src/*.js")
    .pipe(babel())    
    .pipe(gulp.dest("dist"));
});

gulp.task("webpack", function () {
  return gulp.src("dist/*.js")
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest("js"));
});
