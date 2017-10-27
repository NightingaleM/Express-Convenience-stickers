
function Mobile() {
  this.img = $('.work-img')
  this.imgWidth = $('.work').width()
  this.cat = $('#seeyou')
  this.catBottom = this.cat.css('bottom')
  this.catRight = this.cat.css('right')
  
  this.changeHeight()
  this.showCat()
}

Mobile.prototype = {
  changeHeight: function () {
    console.log(this.img.css('height'))
    console.log(this.imgWidth)
    this.img.css({ 'height': this.imgWidth/2 })
  },
  showCat: function () {
    _this = this
    function handleOrientation(event) {
      var x = event.beta;
      var y = event.gamma;
      if (y > 50) { y = 50 }
      _this.cat.css({
        'bottom': 4 * (x - 45) / 5 - 55,
        'right': 4 * y / 5 - 45
      })
    }
    window.addEventListener('deviceorientation', handleOrientation);
  }
}

module.exports.Mobile = Mobile;
