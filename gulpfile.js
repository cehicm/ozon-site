//Declarations
const gulp = require("gulp");
const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const postscss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();
const babel = require("gulp-babel");
sass.compiler = require("dart-sass");
const sharp = require("sharp");
const directory = "src/images/carousel";
const fs = require("fs");

//Img squash
fs.readdirSync(directory).forEach((file) => {
  sharp(`${directory}/${file}`)
    .resize(200, 200)
    .toFile(`${directory}/${file}-200.jpg`);
});

//Sass tasks
function scssTask() {
  return src("src/scss/style.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postscss([cssnano]))
    .pipe(dest("dist", { sourcemaps: "." }));
}

//Javascript tasks
// Babel
async function babelTask() {
  gulp
    .src("src/js/main.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(terser())
    .pipe(gulp.dest("dist/js"));
}

//Browser tasks
function browsersyncServer(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

//Reload on save
function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("*html", browsersyncReload);
  watch(
    ["src/scss/**/*.scss", "src/js/**/*.js"],
    series(scssTask, babelTask, browsersyncReload)
  );
}

// Default Gulp Task
exports.default = series(browsersyncServer, watchTask);

exports.build = series(parallel(babelTask, scssTask));
