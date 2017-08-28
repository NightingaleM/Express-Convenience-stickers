var express = require('express');
var router = express.Router();
var Note = require('../model/note').Note
/* GET users listing. */
router.get('/notes', function (req, res, next) {
  Note.findAll({ raw: true }).then(function (notes) {
    res.send({status:0,data:notes})
  })
});


router.post('/notes/add', function (req, res, next) {
  var note = req.body.context
  Note.create({context: note}).then(function(){
    res.send({status:0})
  }).catch(function(){
    res.send({status: 1,errorMsg: '数据库出兮兮了'})
  })
});


router.post('/notes/edit', function (req, res, next) {
  Note.update({context: req.body.context},{where:{id:req.body.id}}).then(function(){
    console.log(arguments)
    res.send({status:0})
  })
});


router.post('/notes/delete', function (req, res, next) {
  Note.destroy({where:{id:req.body.id}}).then(function(){
    res.send({status:0})
  }).catch(function(){
    res.send({status: 1,errorMsg: '数据库出兮兮了'})
  })
});


module.exports = router;
