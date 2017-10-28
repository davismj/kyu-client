SystemJS.config({
  baseURL: './dist',
  browserConfig: {
    'paths': {
      'github:': '../jspm_packages/github/',
      'npm:': '../jspm_packages/npm/',
      'local:': '../jspm_packages/local/'
    }
  },
  nodeConfig: {
    'paths': {
      'github:': 'D:/Work/kyu/jspm_packages/github/',
      'npm:': 'D:/Work/kyu/jspm_packages/npm/',
      'local:': 'jspm_packages/local/'
    }
  },
  transpiler: false,
  packages: {
    '.': {}
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json',
    'local:*.json'
  ],
  map: {
    'aurelia-binding': 'npm:aurelia-binding@1.5.0',
    'aurelia-bootstrapper': 'github:aurelia/bootstrapper@2.1.1',
    'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.2',
    'aurelia-event-aggregator': 'npm:aurelia-event-aggregator@1.0.1',
    'aurelia-framework': 'npm:aurelia-framework@1.1.5',
    'aurelia-history': 'npm:aurelia-history@1.1.0',
    'aurelia-history-browser': 'npm:aurelia-history-browser@1.1.0',
    'aurelia-http-client': 'github:aurelia/http-client@1.2.1',
    'aurelia-loader': 'npm:aurelia-loader@1.0.0',
    'aurelia-loader-default': 'npm:aurelia-loader-default@1.0.3',
    'aurelia-logging': 'npm:aurelia-logging@1.3.1',
    'aurelia-logging-console': 'npm:aurelia-logging-console@1.0.0',
    'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
    'aurelia-pal': 'npm:aurelia-pal@1.4.0',
    'aurelia-pal-browser': 'npm:aurelia-pal-browser@1.3.0',
    'aurelia-path': 'npm:aurelia-path@1.1.1',
    'aurelia-polyfills': 'npm:aurelia-polyfills@1.2.2',
    'aurelia-route-recognizer': 'npm:aurelia-route-recognizer@1.1.1',
    'aurelia-router': 'npm:aurelia-router@1.4.0',
    'aurelia-task-queue': 'npm:aurelia-task-queue@1.2.1',
    'aurelia-templating': 'npm:aurelia-templating@1.6.0',
    'aurelia-templating-binding': 'npm:aurelia-templating-binding@1.4.0',
    'aurelia-templating-resources': 'npm:aurelia-templating-resources@1.5.3',
    'aurelia-templating-router': 'npm:aurelia-templating-router@1.2.0',
    'fs': 'npm:jspm-nodelibs-fs@0.2.1',
    'kyu-core': 'local:kyu-core@0.1.0',
    'path': 'npm:jspm-nodelibs-path@0.2.3',
    'process': 'npm:jspm-nodelibs-process@0.2.1'
  },
  packages: {}
});
