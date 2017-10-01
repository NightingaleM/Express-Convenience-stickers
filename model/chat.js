var path = require('path');
var Sequelize = require('sequelize')


var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',

  storage: path.join(__dirname, '../database/chat-database.sqlite')
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
var Chat = sequelize.define('chat', {
  chatText: {
    type: Sequelize.STRING
  },
  headColor: {
    type: Sequelize.STRING
  }
});
// Chat.sync({force:true})
// Chat.sync().then(() => {
//   // Table created
//   return Chat.create({
//     chatText: '巴拉巴拉巴巴',
//     headColor: '#157823'
//   });
// });

// Chat.findAll({raw:true}).then(chats => {
//   console.log(chats)
// })

module.exports.Chat = Chat
