'use strict';

var isPresent = require('is-present');
var hasClassSelector = require('has-class-selector');

module.exports = function classPrefix(prefix, options) {
  options = options || {};
  var ignored = options.ignored;
  var prefixClassForTag = options.prefixClassForTag;

  /** This return will create new rule in new file */
  return function prefixRules(styling) {
    styling.rules.forEach(function(rule) {

      /** Ignore @media */
      if (rule.rules) {
        return prefixRules(rule);
      }

      if (!rule.selectors) return rule;

      rule.selectors = rule.selectors.map(function(selector) {
        var shouldIgnore = false;

        /** Ignore @-ms-viewport */
        if(selector.indexOf("@") !== -1) {
          return selector;
        }

        if (hasClassSelector(selector)) {
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
        }
        else if(isPresent(prefixClassForTag)) {

          /**
           * Replace html and body to prefixClassForTag
           */
          if(selector.indexOf("html") !== -1){
            return selector.replace("html", "." + prefixClassForTag);
          }

          if(selector.indexOf("body") !== -1) {
            return selector.replace("body", "." + prefixClassForTag);
          }

          else {
            return '.' + prefixClassForTag +' ' + selector;
          }
        }

        return selector;
      });
    });
  };
};
