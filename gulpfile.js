const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/images'));
}

function html() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
}

exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.html = html;

exports.default = gulp.parallel(styles, scripts, images, html);

exports.watch = function () {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
    gulp.watch('./index.html', html);
};
