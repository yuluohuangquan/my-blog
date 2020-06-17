'use strict';

module.exports = app => {
  const { router, controller } = app;
  // 获取用户列表
  router.get('/backend/getUserList', controller.backend.userList.getUserList);
  // 新增用户
  router.get('/backend/addUser/:name/:password/:lastTime/:type', controller.backend.userList.addUser);
  // 删除用户
  router.get('/backend/deleteUser/:Id', controller.backend.userList.deleteUser);
  // 修改用户
  router.get('/backend/editUser/:Id/:name/:password/:lastTime/:type', controller.backend.userList.editUser);
};
