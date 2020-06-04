'use strict';

module.exports = app => {
  const { router, controller } = app;
  // 获取大乐透的数据导入到数据库
  router.get('/test/setDaLetou/:id/:len', controller.test.setDaLetou.index);
};
