import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default [
  ...bpmnIoPlugin.configs.browser.map(config => ({
    ...config,
    files: [ 'src/**/*.js', 'test/**/*.js' ]
  })),
  ...bpmnIoPlugin.configs.mocha.map(config => ({
    ...config,
    files: [ 'test/**/*.js' ]
  }))
];
