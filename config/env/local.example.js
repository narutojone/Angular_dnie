'use strict';

// Rename this file to local-NODE_ENV.js (i.e. local-development.js, or local-test.js) for having a local configuration variables that
// will not get commited and pushed to remote repositories.
// Use it for your API keys, passwords, etc.

// WARNING: When using this example for multiple NODE_ENV's concurrently, make sure you update the 'db' settings appropriately.
// You do not want to accidentally overwrite/lose any data. For instance, if you create a file for 'test' and don't change the
// database name in the setting below, running the tests will drop all the data from the specified database.
//
// You may end up with a list of files, that will be used with their corresponding NODE_ENV:
//
// local-development.js
// local-test.js
// local-production.js
//

/* For example (Development):

module.exports = {
  db: {
    uri: 'mongodb://172.18.0.1/local-dev',
    options: {
      user: '',
      pass: ''
    }
  },
  sessionSecret: process.env.SESSION_SECRET || 'youshouldchangethistosomethingsecret',
  sendgrid: {
    clientSecret: process.env.SENDGRID_API_KEY || 'placerealsendgridapikeyhere'
  },
  brightcove: {
    accountId: process.env.BRIGHTCOVE_ACCOUNT_ID || 'placeyourbrightcoveaccountid',
    clientId: process.env.BRIGHTCOVE_CLIENT_ID || 'placeyourbrightcoveclientid',
    clientSecret: process.env.BRIGHTCOVE_CLIENT_SECRET || 'placeyourbrightcoveclientsecret'
  },
  zencoder: {
    clientSecret: process.env.ZENCODER_CLIENT_SECRET || 'placeyourzendcoderclientsecret'
  },
  amazonS3: {
    accessKeyId: process.env.AMAZON_S3_ACCESS_KEY_ID || 'placeyouramazons3accesskeyid',
    secretAccessKey: process.env.AMAZON_S3_SECRET_ACCESS_KEY || 'placeyouramazons3secretaccesskey'
  }
};

*/
