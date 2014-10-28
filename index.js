'use strict';

module.exports = function(options) {
  return function classPrefix(prefix) {
    var visit = require('rework-visit');

    visit(prefix, function(rule, node) {
      if (!rule.selectors) return rule;

      rule.selectors = rule.selectors.map(function(selector) {
        if (selector.indexOf('.') !== 0) {
          selector.split('.').join('.' + prefix);
        }
      });
    });
  };
};
