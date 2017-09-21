var SkillCanvas = (function () {
  var canvas = document.querySelector('#canvas')
  var ftag = 0

  function showCanvas(tag) {
    var tag = parseInt(tag) / 100
    var ctx = this.canvas.getContext('2d');
    ctx.lineWidth = 30;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 2;
    ctx.font = '18px Verdana';
    var startAngle = 0;

    ctx.clearRect(0, 0, 750, 500);
    //静态页面
    ctx.beginPath();
    ctx.strokeStyle = "rgb(255, 255, 204)";
    ctx.shadowColor = "rgba(202, 215, 211, 0.68)";
    ctx.arc(222, 240, 200, 0, tag * 0.9 * Math.PI, false)
    ctx.stroke();
    //动态页面
    ctx.beginPath();
    ctx.strokeStyle = "rgb(204, 255, 255)";
    ctx.shadowColor = "rgba(202, 215, 211, 0.68)";
    ctx.arc(222, 240, 165, 0, tag * 0.7 * Math.PI, false)
    ctx.stroke();
    //移动端页面

    ctx.beginPath();
    ctx.strokeStyle = "rgb(255, 227, 151)";
    ctx.shadowColor = "rgba(255, 224, 150, 0.68)";
    ctx.arc(222, 240, 130, 0, tag * 0.6 * Math.PI, false)
    ctx.stroke();
    //框架
    ctx.beginPath();
    ctx.strokeStyle = "rgb(255, 204, 204)";
    ctx.shadowColor = "rgba(202, 215, 211, 0.68)";
    ctx.arc(222, 240, 95, 0, tag * 0.62 * Math.PI, false)
    ctx.stroke();

    ctx.fillText(`HTML/CSS：${parseInt(tag*100/2*0.9)}%`, 449, 290);
	ctx.fillText(`JavaScript：${parseInt(tag*100/2*0.70)}%`, 449, 340);
	ctx.fillText(`HTML5/CSS3：${parseInt(tag*100/2*0.6)}%`, 449, 390);
	ctx.fillText(`jQuery/Express/Webpack：${parseInt(tag*100/2*0.62)}%`, 449, 440);
    if (ftag == 200) {
      console.log('200')
      clearInterval(tim)
    }
  }

  function OHH() {
    showCanvas(ftag)

    tim = setInterval(function () {
      ftag += 2
      showCanvas(ftag)
    }, 20)
    console.dir(tim)
  }

  return {
    star: OHH
  }

})()

module.exports.SkillCanvas = SkillCanvas
