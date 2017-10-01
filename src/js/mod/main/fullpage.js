var SkillCanvas = require('mod/main/skillcanvas.js').SkillCanvas

function Fullpage(opt) {
  this.$opt = opt
  this.$sections = opt.children('.fullpage')
  this.currentIdx = 0
  this.animating = false
  this.skill = 1
  this.saythat()
  this.needFullpage()
}


Fullpage.prototype = {
  saythat: function () {
    console.log('我有在运行，这是： ' + this.currentIdx)
    if (this.currentIdx === 2 && this.skill === 1) {
      new SkillCanvas.star
      this.skill = 0
    }
  },
  needFullpage: function () {
    var $ww = $(window).width();
    if ($ww < 1024) {
      this.bindEvents(false)
    } else {
      this.bindEvents(true)
    }
  },
  bindEvents: function (TF) {
    if (TF) {
      this.$opt.addClass('hidden')
      this.$opt.on('wheel', begingFullpage = (e) => {
        let tagIdx = this.currentIdx + (parseInt(e.originalEvent.wheelDelta) < 0 ? 1 : -1)
        this.changePage(tagIdx).then(() => {
          this.currentIdx = tagIdx
          this.saythat()
        }, () => { })
      })
    } else {
      this.$opt.removeClass('hidden')
    }
  },
  changePage: function (tagIdx) {
    return new Promise((resolve, reject) => {
      if (this.animating) {
        reject()
      } else if (tagIdx < 0) {
        reject()
      } else if (tagIdx > this.$sections.length - 1) {
        reject()
      } else if (tagIdx == this.currentIdx) {
        reject()
      } else {
        let _this = this
        this.animating = true
        this.$sections.eq(3).on('transitionend', function callback() {
          $(this).off('transitionend', callback)
          _this.animating = false
          resolve()
        })
        this.$sections.each((idx, elm) => {
          $(elm).css({ transform: `translateY(-${100 * tagIdx}%)` })
        })
      }
    })
  },
}


module.exports.Fullpage = Fullpage



// var fullp = new Fullpage($('#pageLayout'))