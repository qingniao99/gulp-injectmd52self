# gulp-injectmd52self
> A gulp plugin that help you to inject file's md5 into itself.

## Usage

install `gulp-injectmd52self` as a development dependency:

```shell
npm install --save-dev gulp-injectmd52self
```

Then, add it to your `gulpfile.js`:

```javascript
var replace = require('gulp-injectmd52self');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace('your pattern')
    .pipe(gulp.dest('build/file.txt'));
});
```
