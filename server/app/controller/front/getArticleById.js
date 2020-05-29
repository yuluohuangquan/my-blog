'use strict';

const Controller = require('egg').Controller;

/**
 * 详细页文章接口
 */
class MainController extends Controller {
  async index() {
    // 先配置路由的动态传值，然后再接收值
    const id = this.ctx.params.id;

    if (id) {
      const sql1 =
        'UPDATE article SET view_count = (view_Count+1) WHERE id =' + id;

      const updateResult = await this.app.mysql.query(sql1);
      const updateSuccess = updateResult.affectedRows === 1;
      if (updateSuccess) {
        const sql2 =
          'SELECT Id,type_id,title,article_content,' +
          'introduce,view_count,part_count,article_content_html ,introduce_html,' +
          'FROM_UNIXTIME(addTime,"%Y-%m-%d" ) as addTime' +
          ' FROM article WHERE id=' +
          id;

        let result2 = await this.app.mysql.query(sql2);
        result2 = JSON.stringify(result2);
        result2 = JSON.parse(result2);

        const typeid = result2[0].type_id;

        const sql3 = 'SELECT typeName FROM type WHERE id=' + typeid;
        let result3 = await this.app.mysql.query(sql3);

        result3 = JSON.stringify(result3);
        result3 = JSON.parse(result3);

        result2[0].typeName = result3[0].typeName;

        this.ctx.body = { data: result2 };
      } else {
        this.ctx.body = { data: 'id错误' };
      }
    } else {
      this.ctx.body = { data: 'id错误' };
    }
  }
}

module.exports = MainController;
