import babel from "gulp-babel";
import concat from "gulp-concat";
import del from "del";
import gulp from "gulp";
import uglify from "gulp-uglify";
import postcss from "gulp-postcss";
import sass from "gulp-sass"
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import rename from "gulp-rename";
import log from "fancy-log";
import browserSync from "browser-sync";

const server = browserSync.create();

const paths = {
  styles: {
    src: 'src/scss/global.scss',
    srcWatch: 'src/scss/*.scss',
    dest: 'dist'
  },  
  scripts: {
    src: "src/scripts/*.js",
    dest: "dist"
  },
  html: {
    src: "*.html"
  }
};

const clean = () => del(["dist"]);

function styles() {
  return gulp
    .src(paths.styles.src, { sourcemaps: true})
    .pipe(sass().on('error', function(err){
      log.error(err.message);
    }))
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());

}

function scripts() {
  return gulp
    .src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("index.min.js"))
    .pipe(gulp.dest(paths.scripts.dest));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    files: ["dist/*.css", "dist/*.js"],
    server: {
      baseDir: "./"
    }
  });
  done();
}

// Watch files
const watch = () => {
  gulp.watch(paths.styles.srcWatch, gulp.series(styles));
  gulp.watch(paths.scripts.src, gulp.series(scripts, reload));
  gulp.watch(paths.html.src, gulp.series(reload));
}

const dev = gulp.series(clean, styles, scripts, serve, watch);
export default dev;
