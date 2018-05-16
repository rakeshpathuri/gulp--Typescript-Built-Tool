let gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task('default', ['watch']);

gulp.task('createjs',function(){
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));
});
gulp.task('watch', function() {
gulp.watch('./src/*.ts', ['createjs']);
});
gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
})
