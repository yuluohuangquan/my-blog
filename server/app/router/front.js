'use strict';

module.exports = app => {
  const { router, controller } = app;
  // 测试
  router.get('/front/test', controller.front.home.index);
  // 首页文章列表接口
  router.get('/front/getArticleList', controller.front.getArticleList.index);
  // 类别列表接口
  router.get('/front/getTypeList', controller.front.getTypeList.index);
  // 详细页文章接口
  router.get('/front/getArticleById/:id', controller.front.getArticleById.index);
  // 根据类别ID获得文章列表
  router.get('/front/getListById/:id', controller.front.getListById.index);
};
