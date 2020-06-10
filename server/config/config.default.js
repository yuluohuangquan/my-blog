/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589852470709_350';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    client: {
      host: '138.128.218.122',
      port: '3306',
      user: 'root',
      password: '0ae7dafdfa08b4d4',
      database: 'react_blog',
    },
    app: true,
    agent: false,
  };

  // client: {
  //   host: 'localhost',
  //   port: '3306',
  //   user: 'sunyu',
  //   password: '12345678',
  //   database: 'react_blog',
  // },

  config.security = {
    scrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET.Headers,PUT,DELETE,UPDATE',
  };

  return {
    ...config,
    ...userConfig,
  };
};
