module.exports = function(karma) {
  karma.set({
    frameworks: [ 'mocha', 'webpack' ],
    files: [ 'test/index.js' ],
    preprocessors: {
      'test/index.js': [ 'webpack' ]
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.css|\.bpmn$/,
            type: 'asset/source'
          }
        ]
      },
      resolve: {
        mainFields: [ 'module', 'main' ]
      }
    },
    browsers: [ 'ChromeHeadless' ],
    reporters: [ 'progress' ],
    singleRun: true,
    autoWatch: false
  });
};
