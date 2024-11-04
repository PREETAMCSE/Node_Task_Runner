import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task('default', ()=>{
    // Define task for minifying image
    return gulp.src("src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dest/images"))
})
