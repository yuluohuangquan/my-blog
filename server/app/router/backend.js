'use strict';

module.exports = app => {
  const { router, controller } = app;
  // 获取用户列表
  router.get('/backend/getUserList', controller.backend.userList.getUserList);
};
