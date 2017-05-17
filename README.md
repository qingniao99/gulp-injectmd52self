# gulp-injectmd52self
> A gulp plugin that help you to inject file's md5 into itself.

## Usage

install `gulp-injectmd52self` as a development dependency.
warn: you should has a 'placeholder' that would be placed in your file.

```shell
npm install --save-dev gulp-injectmd52self
```

Then, add it to your `gulpfile.js`:

```javascript
var injectmd52self = require('gulp-injectmd52self');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(injectmd52self('your pattern')
    .pipe(gulp.dest('build/file.txt'));
});
```
