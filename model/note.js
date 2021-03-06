var path = require('path');

var Sequelize = require('sequelize')
var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',

  storage: path.join(__dirname, '../database/database.sqlite')
});
/*
初始化数据库，测试是否链接上了。
sequelize
.authenticate()
.then(function(err) {
  console.log('Connection has been established successfully.');
})
.catch(function (err) {
  console.log('Unable to connect to the database:', err);
});
*/
// 定义我的模型
var Note = sequelize.define('note', {
  context: {
    type: Sequelize.STRING
  }
});
/*
Note.sync().then(function () {
  Note.create({
    context: 'helllel'
  });
}).then(function () {
  Note.findAll({raw:true}).then(function (notes) {
    console.log(notes)
  })
})
*/

module.exports.Note = Note
