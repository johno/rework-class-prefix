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

```js
var fs          = require('fs'),
    rework      = require('rework'),
    classPrefix = require('rework-class-prefix');

var css = fs.readFileSync('./some-css-file.css', 'utf-8');

css = rework(css)
  .use(classPrefix('.my-prefix-'))
  .toString();

fs.writeFileSync('./prefixed-css-file.css', css, 'utf-8');
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
