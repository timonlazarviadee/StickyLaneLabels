module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  external: function(id) {
    return id.startsWith('bpmn-js/') ||
      id.startsWith('diagram-js/') ||
      id === 'tiny-svg';
  }
};
