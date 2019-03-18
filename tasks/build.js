import gulp from "gulp";
import gulpSequence from "gulp-sequence";
import "./clean"
import "./css"
import "./pages"
import "./scripts"
import "./browser"
import "./serve"

gulp.task("build", gulp.series("clean", "css", "pages", "scripts",gulp.parallel("browser","serve")));
