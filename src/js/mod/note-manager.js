var Toast = require('mod/toast.js').Toast
var Note = require('mod/note.js').Note
var Event = require('mod/event.js')


var NoteManager = (function () {
  function load() {
    $.get('api/notes').done(
      function (ret) {
        if (ret.status === 0) {
          $.each(ret.data, function (index, article) {
            new Note({
              id: article.id,
              context: article.context
            })
          })
          Event.fire('waterfall')
        }else{
          Toast(ret.errorMsg)
        }
      }
    ).fail(function(){
      Toast('网络错误')
    })
  }



  function add(){
    new Note()
  }

  return {
    load: load,
    add: add
  }
})()


module.exports.NoteManager = NoteManager