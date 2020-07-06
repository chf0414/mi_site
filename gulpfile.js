/**
 *  项目打包规则
 *  gulp运行时默认读取此文件
 */

/**
 *  gulp ==> 本地安装才能使用gulp的API
 *
 *  gulp-cssmin ==> 压缩css
 *  gulp-autoprefixer ==> 自动添加前缀
 *
 *  gulp-uglify ==> 压缩js,不识别es6语法
 *  gulp-babel ==> es6语法转es5
 *    @babel/core ==> babel依赖包
 *    @babel/preset-env ==> babel依赖包
 *
 *  gulp-htmlmin 压缩html文件
 *
 *  del ==> 删除目录
 *
 *  gulp-webserver ==> 开启服务器
 */

/**API
 *  src()
 *    ==> 找到文件
 *    ==> gulp.src('src')
 *    ==> 返回二进制流，可以继续调用gulp方法
 *  pipe() 
 *    ==> 处理文件
 *    ==> gulp.pipe('do something')
 *    ==> 返回二进制流，可以继续调用gulp方法
 *  dest() 
 *    ==> 写入文件
 *    ==> gulp.dest('do something')
 *    ==> 返回二进制流，可以继续调用gulp方法
 *  series() 
 *    ==> 依次执行多个任务
 *    ==> gulp.series(n1,fn2,...)
 *    ==> 返回二进制流，可以继续调用gulp方法
 *  parallel() 
 *    ==> 同时执行多个任务
 *    ==> gulp.parallel(fn1,fn2,...)
 *    ==> 返回二进制流，可以继续调用gulp方法
 *  watch()
 *    ==> 监听文件变化
 *    ==> gulp.watch('src',fn)
 */

/**导入gulp */
const gulp = require('gulp');
/**导入del */
const del = require('del');
/**导入gulp-autoPrefixer */
const autoPrefixer = require('gulp-autoprefixer');
/**导入gulp-htmlmin */
const htmlmin = require('gulp-htmlmin');
/**导入gulp-cssmin*/
const cssmin = require('gulp-cssmin');
/**导入gulp-babel */
const babel = require('gulp-babel');
/**导入gulp-uglify */
var uglify = require('gulp-uglify');
/**导入gulp-webserver */
var webserver = require('gulp-webserver');
/**导入gulp-sass */
var sass = require('gulp-sass');

/**第三方库处理规则 */
const libHandler = () => {
  return gulp.src('./src/lib/**').pipe(gulp.dest('./disc/lib'));
};
/**图片处理规则 */
const imgHandler = () => {
  return gulp.src('./src/images/**').pipe(gulp.dest('./disc/images'));
};
/**字体处理规则 */
const fontHandler = () => {
  return gulp.src('./src/font/**').pipe(gulp.dest('./disc/font'));
};
/**删除文件规则 */
const delHandler = () => {
  return del(['./disc']);
};
/**html文件处理规则 */
const htmlHandler = () => {
  return gulp.src('./src/pages/*.html').pipe(htmlmin({
    removeAttributeQuotes: true,
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJs: true
  })).pipe(gulp.dest('./disc/pages'));
};
/**css文件处理规则 */
const cssHandler = () => {
  return gulp.src('./src/css/*.css').pipe(autoPrefixer()).pipe(cssmin()).pipe(gulp.dest('./disc/css'));
};
/**sass文件处理规则 */
const sassHandler = () => {
  return gulp.src('./src/scss/*.scss').pipe(sass()).pipe(autoPrefixer()).pipe(cssmin()).pipe(gulp.dest('./disc/css'));
};
/**js文件处理规则 */
const jsHandler = () => {
  return gulp.src('./src/js/*.js').pipe(babel()).pipe(uglify()).pipe(gulp.dest('./disc/js'));
};
/**webserver开启规则 */
const webserverHandler = () => {
  return gulp.src('./disc').pipe(webserver({
    port: 8090,
    livereload: true,
    open: '/pages',
    // proxies: [{
    //   Source: 'abc',
    //   target: 'http://127.0.0.1/json.php'
    // }]
  }));
};
/**自动监控任务 */
const watchHandler = () => {
  gulp.watch('./src/pages/*.html', htmlHandler);
  gulp.watch('./src/css/*.css', cssHandler);
  gulp.watch('./src/scss/*.scss', sassHandler);
  gulp.watch('./src/js/*.js', jsHandler);
  gulp.watch('./src/lib/**', libHandler);
  gulp.watch('./src/images/**', imgHandler);
  gulp.watch('./src/font/**', fontHandler);
};

/**导出 */
/**单个任务导出 */
// module.exports.default = libHandler;
// module.exports.lib = libHandler;

/**多个任务导出 */
module.exports.default = gulp.series(
  delHandler,
  gulp.parallel(libHandler, imgHandler, htmlHandler, cssHandler, sassHandler, jsHandler, fontHandler),
  webserverHandler,
  watchHandler
);



