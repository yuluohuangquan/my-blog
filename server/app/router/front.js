'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/front/test', controller.front.home.index);
  router.get('/front/getArticleList', controller.front.getArticleList.index);
  router.get('/front/getArticleById/:id', controller.front.getArticleById.index);
  router.get('/front/getListById/:id', controller.front.getListById.index);
};
