require('less/notewall.less')

var Event = require('mod/event.js')
var NoteManager = require('mod/note-manager.js').NoteManager
var Waterfall = require('mod/waterfall.js')

NoteManager.load()

$('.add-note').on('click',function(){
  NoteManager.add()
})
$('.water-note').on('click',function(){
  Waterfall.init($('#content'))
})

Event.on('waterfall',function(){
  Waterfall.init($('#content'))
})