'use strict';

module.exports = app => {
  const { router, controller } = app;
  // 获取大乐透的数据导入到数据库
  router.get('/features/setDaLetou/:id/:len', controller.features.setDaLetou.setData);
  // 获取大乐透的数据
  router.get('/features/getDaLetou/:pagesize/:pagenumber', controller.features.setDaLetou.getData);
  // 删除数据库中重复的数据
  router.get('/features/deleteDaLetou', controller.features.setDaLetou.deleteData);
};
