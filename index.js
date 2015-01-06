'use strict';

var isPresent = require('is-present');

module.exports = function classPrefix(prefix, options) {
  options = options || {};
  var ignored = options.ignored;

  return function classPrefix(styling) {
    var walk = require('rework-walk');
    walk(styling, function(rule, node) {
      if (!rule.selectors) return rule;

      rule.selectors = rule.selectors.map(function(selector) {
        var shouldIgnore = false;

        // See if it's a class selector
        if (selector.indexOf('.') === 0) {

          // Ensure that the selector doesn't match the ignored list
          if (isPresent(ignored)) {
            shouldIgnore = ignored.some(function(opt) {
              if (typeof opt == 'string') {
                return selector === opt;
              } else if (opt instanceof RegExp) {
                return opt.exec(selector);
              }
            });
          }

          return shouldIgnore ? selector : selector.split('.').join('.' + prefix);
        } else {
          return selector;
        }
      });
    });
  };
};
