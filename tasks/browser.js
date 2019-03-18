import gulp from "gulp";
import gulpif from "gulp-if";
import gulputil from "gulp-util";
import args from "./util/args";

gulp.task("browser", cb => {
    if(!args.watch) return cb();

    gulp.watch("app/**/*.js", gulp.series("scripts"));
    gulp.watch("app/**/*.ejs", gulp.series("pages"));
    gulp.watch("app/**/*.css", gulp.series("css"));
})