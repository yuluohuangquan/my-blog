'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/backend')(app);
  require('./router/front')(app);
  require('./router/test')(app);
};
