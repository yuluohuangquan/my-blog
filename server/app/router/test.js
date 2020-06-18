'use strict';

module.exports = app => {
  const { router, controller } = app;
  // 获取大乐透的数据导入到数据库
  router.get('/test/setDaLetou/:id/:len', controller.test.setDaLetou.setData);
  // 获取大乐透的数据
  router.get('/test/getDaLetou/:pagesize/:pagenumber', controller.test.setDaLetou.getData);
  // 删除数据库中重复的数据
  router.get('/test/deleteDaLetou', controller.test.setDaLetou.deleteData);
};
