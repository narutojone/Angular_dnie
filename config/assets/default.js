'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.css',
        // 'public/lib/bootstrap/dist/css/bootstrap-theme.css'
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/dist/angular-file-upload.js',
        'public/lib/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/ng-file-upload/ng-file-upload-all.js'
        // endbower
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      // 'modules/*/client/css/*.css',
      'modules/ffmedia/client/assets/css/*.css',
    ],
    sass: [
      // 'modules/*/client/scss/*.scss',
      'modules/ffmedia/client/**/*.scss',
    ],
    js: [
      // 'modules/core/client/app/config.js',
      // 'modules/core/client/app/init.js',
      // 'modules/*/client/*.js',
      // 'modules/*/client/**/*.js'
      'modules/ffmedia/client/index.init.js',
      'modules/ffmedia/client/**/*.client.*.js'
    ],
    img: [
      'modules/ffmedia/client/assets/img/**/*.jpg',
      'modules/ffmedia/client/assets/img/**/*.png',
      'modules/ffmedia/client/assets/img/**/*.gif',
      'modules/ffmedia/client/assets/img/**/*.svg'
    ],
    views: [
      // 'modules/*/client/views/**/*.html',
      'modules/ffmedia/client/**/*.client.view.html',
    ],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: ['gruntfile.js'],
    gulpConfig: ['gulpfile.js'],
    allJS: [
      'server.js',
      'config/**/*.js',
      // 'modules/*/server/**/*.js',
      'modules/ffmedia/**/*.server.*.js',
      'modules/api/**/*.server.*.js',
    ],
    models: [
      // 'modules/*/server/models/**/*.js'
      'modules/api/server/**/*.server.model.js',
    ],
    routes: [
      // 'modules/!(core)/server/routes/**/*.js',
      // 'modules/core/server/routes/**/*.js',
      'modules/api/**/*.server.routes.js',
      'modules/ffmedia/**/*.server.routes.js',
    ],
    sockets: [
      // 'modules/*/server/sockets/**/*.js'
    ],
    config: [
      // 'modules/*/server/config/*.js',
      'modules/api/**/*.server.config.js',
      'modules/ffmedia/**/*.server.config.js',
    ],
    policies: [
      // 'modules/*/server/policies/*.js'
      'modules/api/**/*.server.policy.js',
    ],
    views: [
      // 'modules/*/server/views/*.html',
      'modules/ffmedia/**/*.server.view.html'
    ]
  }
};
