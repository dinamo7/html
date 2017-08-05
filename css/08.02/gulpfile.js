var gulp = require("gulp");
var less = require("gulp-less");
var cssnamo = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var sync = require("browser-sync").create();
var htmlExtend = require("gulp-html-extend");
var concat = require("gulp-concat");
var rename = require("gulp-rename");

gulp.task("css:app", function () {
    return gulp.src("src/style/app.less")
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cssnamo())
        .pipe(sourcemaps.write())
        .piipe(rename("bundle.min.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(gulp.stream());  //  ???
});

gulp.task("css:vendor", function () { // ???
   return gulp.src([
       "node_modules/bootstrap/dist/css/bootstrap.min.css",
       "node_modules/toastr/build/toastr.min.css",
       "dist/css/bundle.min.css" // ???
   ])
       .pipe(concat("bundle.min.css"))
       .pipe(gulp.dest("dist/css"));
});

gulp.task("html", ["css:app"], function () {
   return gulp.src("src/pages/*.html") // (*) ???
       .pipe(htmlExtend())
       .pipe(gulp.dest("dist"));
});

gulp.task("build", ["html","css:vendor","css:app"]);

gulp.task("watch",["build"], function () {
 sync.init({
     server: "dist"
 });

 gulp.watch("src/styles/**/*.less", ["css:app"]);

 gulp.watch("src/**/*.html", ["html"]);
 gulp.watch("dist/*.html").on("change", sync.reload);
});

gulp.task("default", ["watch"]);