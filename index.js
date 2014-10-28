'use strict';

module.exports = function classPrefix(prefix) {
  return function classPrefix(styling) {
    var walk = require('rework-walk');
    walk(styling, function(rule, node) {
      if (!rule.selectors) return rule;

      rule.selectors = rule.selectors.map(function(selector) {
        if (selector.indexOf('.') === 0) {
          return selector.split('.').join('.' + prefix);
        } else {
          return selector;
        }
      });
    });
  };
};
