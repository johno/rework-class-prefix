# Rework Class Prefix

Add a class prefix to further sandbox CSS styling for third-party imports.

This comes in handy when you want to import two different CSS modules that might
have conflictings styles. For example, if module A and module B both have a
`.media` class selector that have different use cases, you can run them through
`rework-class-prefix` and result in something like `.a-media` and `.b-media`.

## Installation

```
npm install --save rework-class-prefix
```

## Usage

Example use in a gulpfile:

```js
var gulp        = require('gulp'),
    name        = require('gulp-rename'),
    rework      = require('gulp-rework'),
    reworkNPM   = require('rework-npm'),
    classPrefix = require('rework-class-prefix');

gulp.task('css', function() {
  return gulp.src('index.css')
    .pipe(rework(reworkNPM(), classPrefix('prfx-')))
    .pipe(name('index-prefixed.css'))
    .pipe(gulp.dest('css'));
});
```

## License

MIT

## Acknowledgements

* Leverages <https://github.com/intesso/rework-walk>.
* Built on top of <https://github.com/reworkcss/rework>.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
