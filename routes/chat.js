var express = require('express');
var router = express.Router();
var Chat = require('../model/chat').Chat

router.get('/chats', function (req, res, next) {
  Chat.findAll({ raw: true }).then(function (chats) {
    console.log(chats)
    res.send({ status: 0, data: chats })
  })
});


router.post('/chat/add', function (req, res, next) {
  var chat = req.body.chatText
  var pcolor = req.body.headColor
  
  Chat.create({
    chatText: chat,
    headColor: pcolor
  }).then(function () {
    res.send({ status: 0 })
  }).catch(function () {
    res.send({ status: 1, errorMsg: '数据库出兮兮了' })
  })
});

// router.post('/chat/delete',function(req,res,next){
//   Chat.destroy({where:{id:req.body.id}}).then(function(){
//     res.send({status: 0})
//   }).catch(function(){
//     res.send({status: 1,errorMsg: '数据库出兮兮了'})    
//   })
// })

module.exports = router;
