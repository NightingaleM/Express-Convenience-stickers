

function Isay(opt, showopt) {
  this.$opt = opt
  this.$sopt = showopt
  this.schildren = this.$sopt.children('li')
  this.children = this.$opt.children('li')
  this.sclength = showopt.children('li').length
  this.clength = opt.children('li').length
  this.sidx = 0
  this.idx = 0
  this.saying()
}

Isay.prototype = {
  sayone: function (idx) {
    if (this.idx === this.clength) {
      this.mying()
      clearInterval(window.nIntervId1)
      return
    }
    this.children.eq(idx).show(350)
    this.idx++
  },
  saying: function () {
    var _this = this
    window.nIntervId1 = setInterval(function () { _this.sayone(_this.idx) }, 1000)
  },

  showmyself: function (idx) {
    if (this.sidx === this.sclength) {
      clearInterval(window.nIntervId2)
      return
    }
    this.schildren.eq(idx).show(600)
    this.sidx++
  },
  mying: function () {
    var _this = this
    window.nIntervId2 = setInterval(function () { _this.showmyself(_this.sidx) }, 200)
  }
}

module.exports.Isay = Isay
