function Exposure() {
  this.header = $('header')
  this.moveHeader = $('#moveheader')[0]
  this.windowHeight = window.innerHeight


  this.windowListener()

}
Exposure.prototype.windowListener = function () {
  var _this = this
  window.addEventListener('touchmove', function () {
    _this.scTop = _this.scrollTop()
    _this.moveHeaderHeight = _this.targetHeight(_this.moveHeader)
    _this.moveHeaderTop = _this.targetOffsetTop(_this.moveHeader)
    _this.whereTarget(_this.moveHeader, _this.scTop, _this.moveHeaderTop, _this.moveHeaderHeight)
  })
}
Exposure.prototype.targetHeight = function (target) {
  return target.offsetHeight
}
Exposure.prototype.targetOffsetTop = function (target) {
  return target.offsetTop
}
Exposure.prototype.scrollTop = function () {
  return window.scrollY
}
Exposure.prototype.whereTarget = function (tag, sct, tagt, tagh) {
  if (tagt + tagh < sct) {
    // 在上面
    if (!this.header.hasClass('header-active')) {
      this.header.addClass('header-active')
    }
    return
  }
  if (tagt + tagh > sct && tagt + tagh < this.windowHeight + sct) {
    // 在中间
    if (this.header.hasClass('header-active')) {
      this.header.removeClass('header-active')
    }
    return
  }
  if (tagt > this.windowHeight + sct) {
    // 在下面
    return
  }

}


module.exports.Exposure = Exposure;
