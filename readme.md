# gulp-jscrush

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
