require('less/index.less')

var Event = require('mod/event.js')
var NoteManager = require('mod/note-manager.js').NoteManager
var Waterfall = require('mod/waterfall.js')

NoteManager.load()


$('.add-note').on('click',function(){
  console.log(1)
  NoteManager.add()
})

Event.on('waterfall',function(){
  Waterfall.init($('#content'))
})