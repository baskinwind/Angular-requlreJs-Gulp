'use strict';

/* load gulp */

var gulp = require('gulp');

/* load plugins for gulpStream*/

var autoprefixer = require('autoprefixer'),
    del = require('del'),
    filter = require('gulp-filter'),
    gulpif = require('gulp-if'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    requirejsOptimize = require('gulp-requirejs-optimize'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    lazypipe = require('lazypipe'),
    revCollector = require('gulp-rev-collector');

/* load plugins for browser */

var browserSync = require('browser-sync'),
    reload = browserSync.reload;

var appInfo = {
    appDir: './app/',
    distDir: './dist/',
    revDir: './rev/',
    tmp: './.tmp/',
    mainCss: 'main.scss',
    requireConfig: './app/scripts/requireConfig.js',
    requireMainFile: 'main',
    almondPath: '../lib/bower/almond/almond',
};

gulp.task('clean', ()=> {
    return del([appInfo.distDir, appInfo.tmp, appInfo.revDir]);
});

/* 打包压缩css/scss文件 / make all css/scss into one file */
gulp.task('styles', ()=> {

    return gulp.src(appInfo.appDir + 'styles/**/*.scss')
        .pipe(plumber())
        .pipe(filter('**/' + appInfo.mainCss))
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({browsers: ['last 2 version']})
        ]))
        .pipe(cleanCss())
        .pipe(gulp.dest(appInfo.tmp + 'styles'));

});

gulp.task('fonts', () => {
    return gulp.src(appInfo.appDir + 'font/**/*.{eot,svg,ttf,woff}')
        .pipe(gulp.dest(appInfo.distDir + 'font'));
});

gulp.task('html', ()=> {

    var jsChannel = lazypipe()
        .pipe(requirejsOptimize, {
            name: appInfo.almondPath,
            optimize: 'none',
            useStrict: true,
            mainConfigFile: appInfo.requireConfig,
            baseUrl: appInfo.appDir + 'scripts',
            include: [appInfo.requireMainFile],
            insertRequire: [appInfo.requireMainFile]
        })
        .pipe(uglify);

    var htmlChannel = lazypipe()
        .pipe(htmlmin, {collapseWhitespace: true});

    return gulp.src(appInfo.appDir + '*.html')
        .pipe(useref({searchPath: '{.tmp,' + appInfo.appDir + '}'}))
        .pipe(gulpif('**/scripts/main.js', jsChannel()))
        .pipe(gulpif('**/*.html', htmlChannel()))
        .pipe(gulp.dest(appInfo.distDir));
});

gulp.task('markVersion', ()=> {

    const needFile = [appInfo.distDir + '**/*.{js,css}'];
    const moveFile = [appInfo.distDir + 'font/**/*', appInfo.distDir + 'index.html'];

    return gulp.src(needFile)
        .pipe(rev())
        .pipe(gulp.dest(appInfo.revDir))
        .pipe(rev.manifest())
        .pipe(gulp.dest(appInfo.revDir + 'rev'))
        .pipe(gulp.src(moveFile, {base: appInfo.distDir}))
        .pipe(gulp.dest(appInfo.revDir));

});

gulp.task('addVersion', ()=> {

    return gulp.src(['**/rev/**/*.json', appInfo.revDir + '*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest(appInfo.revDir));

});

var runServer = (open = false, callback)=> {
    browserSync({
        notify: false,
        port: 9000,
        open: open,
        server: {
            baseDir: appInfo.appDir
        }
    }, callback);
};

/* 开启一个web服务器，解决xhr问题 / start a web service  */
gulp.task('browserSync', ()=> {
    runServer(true);
});

gulp.task('watch', ()=> {
    // watch for changes
    gulp.watch([
        appInfo.appDir + '*.html',
        appInfo.appDir + 'template/**/*.html',
        appInfo.appDir + 'scripts/**/*.js'
    ]).on('change', reload);

});

gulp.task('run', gulp.parallel('browserSync', 'watch'));

gulp.task('package', gulp.series('clean', 'styles', 'fonts', 'html'));

gulp.task('version', gulp.series('markVersion', 'addVersion'));

gulp.task('default', gulp.series('package', 'version'));
