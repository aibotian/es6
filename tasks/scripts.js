import gulp from "gulp";
import gulpif from "gulp-if";
import concat from "gulp-concat";
import webpack from "webpack";
import gulpWebpack from "webpack-stream";
import named from "vinyl-named";
import livereload from "gulp-livereload";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import uglify from "gulp-uglify";
import { log, colors } from "gulp-util";
import args from "./util/args";

gulp.task("scripts", () => {
    return gulp.src(["app/js/index.js"])
        .pipe(plumber({
            errorHandle: function(){

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            mode: "development",
            module: {
                rules: [{
                    test: /\.js$/,
                    use: "babel-loader"
                }]
            },

        }),null, (err, stats)=> {
            log(`Finished ${colors.cyan('scripts')}`, stats.toString({
                chunks: false
            }))
        }).pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename: "cp",
            extname: ".min.js"
        }))
        .pipe(uglify())
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch, livereload()))
})