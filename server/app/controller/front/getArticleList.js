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
      'article.view_count as view_count ,' +
      'article.introduce_html as introduce_html ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'WHERE article.isTop = 0  AND article.type_id <> 99 ' +
      'ORDER BY article.id DESC';
    const resList = await this.app.mysql.query(sql);
    const resType = await this.app.mysql.select('type');
    const bibidaoList = await this.app.mysql.select('bibidao', {
      orders: [[ 'id', 'desc' ]],
      limit: 4,
    });
    const sql2 =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'FROM_UNIXTIME(article.addTime,"%Y-%m-%d" ) as addTime,' +
      'article.view_count as view_count ,' +
      'article.introduce_html as introduce_html ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'WHERE article.isTop = 1 ' +
      'ORDER BY article.id DESC';
    const resTopList = await this.app.mysql.query(sql2);
    this.ctx.body = {
      list: resList,
      type: resType,
      bibidaoList,
      topList: resTopList,
    };
  }
}

module.exports = MainController;
