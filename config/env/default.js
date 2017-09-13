'use strict';

module.exports = {
  app: {
    title: 'FFMedia',
    description: 'FFM 2.0 The new streaming service for film festivals',
    keywords: 'streaming',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0',
  templateEngine: 'swig',
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: process.env.SESSION_SECRET || 'this_should_be_changes_for_security_reasons_on_every_platform',
  sendgrid: {
    clientSecret: process.env.SENDGRID_API_KEY,
    inviteBaseUrl: process.env.INVITE_BASE_URL || 'http://ffmediaclientcloud66.staging-275124.staging.c66.me'
  },
  brightcove: {
    accountId: process.env.BRIGHTCOVE_ACCOUNT_ID,
    clientId: process.env.BRIGHTCOVE_CLIENT_ID,
    clientSecret: process.env.BRIGHTCOVE_CLIENT_SECRET
  },
  zencoder: {
    clientSecret: process.env.ZENCODER_CLIENT_SECRET
  },
  amazonS3: {
    baseUrl: 'https://s3.amazonaws.com',
    filmsBucket: process.env.AMAZON_S3_FILMS_BUCKET || 'festv-production-films',
    imagesBucket: process.env.AMAZON_S3_IMAGES_BUCKET || 'festv-production-images',
    transcodingBucket: process.env.AMAZON_S3_TRANSCODING_BUCKET || 'festv-production-zencoder',
    captionsBucket: process.env.AMAZON_S3_CAPTIONS_BUCKET || 'festv.captions',
    accessKeyId: process.env.AMAZON_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AMAZON_S3_SECRET_ACCESS_KEY
  },
  // sessionKey is set to the generic sessionId key used by PHP applications
  // for obsecurity reasons
  sessionKey: 'sessionId',
  sessionCollection: 'sessions',
  // Lusca config
  csrf: {
    csrf: false,
    csp: { /* Content Security Policy object */},
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    xssProtection: true
  },
  logo: 'modules/ffmedia/client/assets/img/brand/logo.png',
  favicon: 'modules/ffmedia/client/assets/img/brand/favicon.ico',
  uploads: {
    profileUpload: {
      dest: './modules/ffmedia/client/assets/img/profile/uploads/', // Profile upload destination path
      limits: {
        fileSize: 1 * 1024 * 1024 // Max file size in bytes (1 MB)
      }
    }
  }
};
