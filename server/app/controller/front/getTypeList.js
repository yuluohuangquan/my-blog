'use strict';

const Controller = require('egg').Controller;

/**
 * 获取类别列表
 */
class MainController extends Controller {
  async index() {
    const resType = await this.app.mysql.select('type');

    this.ctx.body = {
      type: resType,
    };
  }
}

module.exports = MainController;
