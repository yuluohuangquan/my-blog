'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/front/index', controller.front.welcome.index);
  router.get('/front/home', controller.front.home.index);
};
