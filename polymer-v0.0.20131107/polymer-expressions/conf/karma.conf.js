module.exports = function(karma) {
  var common = require('../../tools/test/karma-common.conf.js');
  karma.set(common.mixin_common_opts(karma, {
    // base path, that will be used to resolve files and exclude
    basePath: '../../',

    // list of files / patterns to load in the browser
    files: [
      'polymer-expressions/node_modules/chai/chai.js',
      'polymer-expressions/conf/mocha.conf.js',
      'TemplateBinding/load.js',
      'polymer-expressions/third_party/esprima/esprima.js',
      'polymer-expressions/src/polymer-expressions.js',
      'polymer-expressions/tests/*.js',
      {pattern: 'NodeBind/src/*.js', included: false},
      {pattern: 'TemplateBinding/src/*.css', included: false},
      {pattern: 'TemplateBinding/src/*.js', included: false},
      {pattern: 'observe-js/src/*.js', included: false}
    ]
  }));
};
