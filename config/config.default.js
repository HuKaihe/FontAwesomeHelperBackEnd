'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1520409811913_9278';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'handlebars',
    mapping: {
      '.hbs': 'handlebars',
    },
  };
  return config;
};
