'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/front/test', controller.front.home.index);
  router.get('/front/getArticleList', controller.front.getArticleList.index);
};
