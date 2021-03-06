'use strict';

const Controller = require('egg').Controller;

/**
 * 首页文章列表接口
 */
class MainController extends Controller {
  async index() {
    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'FROM_UNIXTIME(article.addTime,"%Y-%m-%d" ) as addTime,' +
      'article.view_count as viewCount ,' +
      'article.introduce_html as introduceHtml ,' +
      'article.type_id as type ,' +
      'article.is_draft as isDraft ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'WHERE article.isTop = 0  AND article.type_id <> 99 ' +
      'ORDER BY article.id DESC';
    const resList = await this.app.mysql.query(sql);

    this.ctx.body = {
      list: resList,
    };
  }
}

module.exports = MainController;
