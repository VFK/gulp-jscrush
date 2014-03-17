# gulp-jscrush [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]

>Minify javascript files with [JSCrush](http://www.iteral.com/jscrush/)

## Usage

#### Install
```shell
npm install --save-dev gulp-jscrush
```

#### Use
```javascript
var gulp = require('gulp');
var jscrush = require('gulp-jscrush');

gulp.task('default', function(){
    gulp.src('./test.js')
        .pipe(jscrush())
        .pipe(gulp.dest('./build'));
})
```
[npm-url]: https://npmjs.org/package/gulp-jscrush
[npm-image]: https://badge.fury.io/js/gulp-jscrush.png
[travis-url]: https://travis-ci.org/VFK/gulp-jscrush
[travis-image]: https://travis-ci.org/VFK/gulp-jscrush.png?branch=master