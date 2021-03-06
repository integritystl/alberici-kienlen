var autoprefixer = require('autoprefixer');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require("gulp-babel");
var pump = require('pump');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

var build_dir = './wp-content/themes/alberici-hillsdale/';

gulp.task('scripts', function(cb) {
	pump([
		gulp.src('./wp-content/themes/alberici-hillsdale/js/src/*.js'),
		sourcemaps.init(),
		babel({presets: ['env']}),
		uglify(),
		concat('app.js'),
		sourcemaps.write('.'),
		gulp.dest('./wp-content/themes/alberici-hillsdale/js')
	], cb);
});

gulp.task('sass', function(cb) {
	pump([
		gulp.src('./wp-content/themes/alberici-hillsdale/scss/style.scss'),
		sourcemaps.init(),
		sass(),
//		postcss([autoprefixer("last 2 versions")]),
		postcss([autoprefixer({
			browsers: "last 2 versions",
			grid: "no-autoplace"
		})]),
		sass(),
		sourcemaps.write(),
		gulp.dest('./wp-content/themes/alberici-hillsdale/')
	], cb);
})

gulp.task('default', ['sass', 'scripts'], function(){
	gulp.watch('./wp-content/themes/alberici-hillsdale/scss/**/*.scss', ['sass']);
	gulp.watch('./wp-content/themes/alberici-hillsdale/js/src/*.js', ['scripts']);
});
