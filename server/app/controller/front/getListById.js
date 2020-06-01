'use strict';

const Controller = require('egg').Controller;

/**
 * 根据类别ID获得文章列表
 */
class MainController extends Controller {
  async index() {
    const id = parseInt(this.ctx.params.id);
    if (id) {
      const sql =
        'SELECT article.id as id,' +
        'article.title as title,' +
        'article.introduce as introduce,' +
        'FROM_UNIXTIME(article.addTime,"%Y-%m-%d %H:%i:%s" ) as addTime,' +
        'article.view_count as view_count ,' +
        'type.typeName as typeName ' +
        'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
        'WHERE type_id=' +
        id;
      const result = await this.app.mysql.query(sql);
      this.ctx.body = { data: result };
    } else {
      this.ctx.body = { data: '错误的Id' };
    }
  }
}

module.exports = MainController;
