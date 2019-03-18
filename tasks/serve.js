import gulp from "gulp";
import gulpif from "gulp-if";
import liveserver from "gulp-live-server";
import args from "./util/args";

gulp.task("serve", done => {
    if(!args.watch) return done();

    var server = liveserver.new(["--harmony", "server/bin/www"]);
    server.start();

    // 热更新
    var reloadWatcher = gulp.watch(["server/public/**/*.js", "server/views/**/*.ejs"])

    reloadWatcher.on("change", function(path, stats) {
        console.log(path,stats)
        server.notify.apply(server, [path])
        // console.log('Event type: ' + event.type); // added, changed, or deleted
        // console.log('Event path: ' + event.path); // The path of the modified file
    })

    // 服务重启
    var refreshWatcher = gulp.watch(["server/route/**/*.js", "server/app.js"])
    refreshWatcher.on("change", function(file) {
        server.start();
        console.log('Event type: ' + file); // added, changed, or deleted
        // console.log('Event path: ' + event.path); // The path of the modified file
    })

})