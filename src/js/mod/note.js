require('less/note.less')
var Toast = require('mod/toast.js').Toast
var Event = require('mod/event.js')
function Note(opt) {
  this.initNote(opt)
  this.createNote()
  this.setStyle()
  this.addEvent()
}

Note.prototype = {
  noteColor: [
    ["#FFFFCC", "#CCFFFF"],
    ["#FFCCCC", "#FFFFCC"],
    ["#FFCCCC", "#FFFF99"],
    ["#CCCCFF", "#FFCCCC"],
    ["#FFCC99", "#CCCCCC"],
    ["#CCFF99", "#FFCC99"],
    ["#FFCCCC", "#99CC99"],
    ["#99CCCC", "#FFCC99"],
    ["#FFCCCC", "#99CCCC"],
    ["#FF9966", "#FF6666"],
    ["#CCFF99", "#CCFFFF"],
    ["#FFCCCC", "#CCCCFF"]
  ],

  defaultNote: {
    id: '',
    $content: $('#content').length > 0 ? $('#content') : $('body'),
    context: 'input here'
  },

  initNote: function (tagNot) {
    this.opt = $.extend({}, this.defaultNote, tagNot)
    if (this.opt.id) {
      this.id = this.opt.id
    }
  },

  createNote: function () {
    var cNot = $(`<div class='note'>
          <div class='note-head'><span class='delete'>X<span></div>
      <div class='note-content' contenteditable='true'></div>
    </div>`)
    this.$note = cNot
    console.log(this.opt.context)
    this.$note.find('.note-content').html(this.opt.context)
    this.opt.$content.append(this.$note)
    if(!this.id) this.$note.css("bottom","10px")//新建放右
  },

  setStyle: function () {
    var ccolor = this.noteColor[parseInt(Math.random() * 12)];
    this.$note.find('.note-head').css('background-color', ccolor[0])
    this.$note.find('.note-content').css('background-color', ccolor[1])
  },

  setLayout: function () {
    var _this = this
    if (_this.clk) {
      clearTimeout(_this.clk)
    }
    _this.clk = setTimeout(function () {
      Event.fire('waterfall')
    }, 100)
  },

  addEvent: function () {
    var _this = this,
      $note = this.$note,
      $noteHead = this.$note.find('.note-head'),
      $noteContent = this.$note.find('.note-content'),
      $noteDelete = this.$note.find('.delete')

    $noteDelete.on('click', function () {
      _this.delete()
    })

    $noteContent.on('focus', function () {
      if ($noteContent.html() == 'input here') $noteContent.html('')
      $noteContent.data('before', $noteContent.html())
    }).on('blur paste', function () {
      if ($noteContent.data('before') != $noteContent.html()) {
        $noteContent.data('before', $noteContent.html())
        _this.setLayout()
        if (_this.id) {
          _this.edit($noteContent.html())
        } else {
          _this.add($noteContent.html())
        }

      }
    })

    $noteHead.on('mousedown', function (e) {
      var evtX = e.pageX - $note.offset().left,
        evtY = e.pageY - $note.offset().top

      $note.addClass('draggable').data('evtPos', { X: evtX, Y: evtY })
    }).on('mouseup', function () {
      $note.removeClass('draggable').removeData('pos')
    })

    $('body').on('mousemove', function (a) {
      $('.draggable').length && $('.draggable').offset({
        top: a.pageY - $('.draggable').data('evtPos').Y,
        left: a.pageX - $('.draggable').data('evtPos').X
      })
    })

  },

  edit: function (msg) {
    var _this = this
    $.post('/api/notes/edit', {
      id: _this.id,
      context: msg
    }).done(function (ret) {
      if (ret.status === 0) {
        Toast('修改成功')
        console.log('修改成功')
      } else {
        Toast('修改失败')
        console.log('修改失败')
      }
    })
  },

  add: function (msg) {
    var _this = this
    $.post('/api/notes/add', {
      context: msg
    }).done(function (ret) {
      if (ret.status === 0) {
        Toast('添加成功')
        console.log('添加成功')
      } else {
        Toast('添加失败')
        console.log('添加失败')
      }
    })
  },

  delete: function () {
    var _this = this
    $.post('/api/notes/delete', {
      id: _this.id
    }).done(function (ret) {
      if (ret.status === 0) {
        _this.$note.remove()
        Event.fire('waterfall')
        Toast('删除成功')
        console.log('删除成功')
      } else {
        Toast('删除失败')
        console.log('删除失败')
      }
    })
  }



}


module.exports.Note = Note