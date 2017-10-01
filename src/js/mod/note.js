require('less/note.less')
var Toast = require('mod/toast.js').Toast
var Event = require('mod/event.js')

function Note(opt) {
  this.initNote(opt)
  this.createNote()
  // this.setStyle()
  this.addEvent()
}

Note.prototype = {
  defaultNote: {
    id: '',
    $content: $('#content').length > 0 ? $('#content') : $('body'),
    context: 'input here',
    lastTime: ''
  },

  initNote: function (tagNot) {
    this.opt = $.extend({}, this.defaultNote, tagNot)
    if (this.opt.id) {
      this.id = this.opt.id
    }
  },
  updateTime: function (uptime) {
    //2017-09-02 16:10:56.712 +00:00
    var uptime = uptime.split('').slice(0, 16)
    var Rtime = ""
    $(uptime).each(function (index, tag) {
      Rtime += tag
    })
    Rtime += "  +08:00"
    return Rtime

  },
  createNote: function () {
    var cNot = $(`<div class="note-c">
    <div class="backcolor"></div>
    <div class="note-head">
      <div class="move"></div>
      <div class="delete"></div>
    </div>
    <div class="note-box">
    <div class="note-content" contenteditable="true"></div>
    </div>
  </div>`)
    this.$note = cNot

    this.$note.find('.note-content').html(this.opt.context)
    if (this.id) {
      this.$note.find('.note-box').html(`<div class="note-content" contenteditable="true"></div>
      <div class="last-time"></div>`)
      this.$note.find('.note-content').html(this.opt.context)
      this.$note.find('.last-time').html(this.updateTime(this.opt.lastTime))
    }
    this.opt.$content.append(this.$note)
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
      $noteHead = this.$note.find('.move'),
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
      $('.draggable').length && $('.draggable').removeClass('new-note').offset({
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