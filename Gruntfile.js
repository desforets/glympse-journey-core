/*global module:false*/

/*Generated initially from grunt-init, heavily inspired by yo webapp*/

module.exports = function(grunt) {
  'use strict';

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt config
  require('load-grunt-config')(grunt, {
    init: true,
    data: {
      config: {
        // Configurable paths
        app: 'app',
        dist: 'dist',
		distExports: 'dist',
		moduleIn: 'JourneyCore',
		moduleOut: 'glympse-journey-core',
		moduleVersion: '1.5.3',
		buildsDir: 'builds'
      }
    }
  });
};
