var SkillCanvas = (function () {
  var canvas = document.querySelector('#canvas')
  var ftag = 0

  function showCanvas(tag) {
    var tag = parseInt(tag) / 100
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 30;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 2;
    ctx.font = '18px Verdana';
    var startAngle = 0;

    ctx.clearRect(0, 0, 850, 500);
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

    ctx.fillText(`HTML/CSS：${parseInt(tag * 100 / 2 * 0.9)}%`, 449, 30);
    ctx.fillText(`JavaScript：${parseInt(tag * 100 / 2 * 0.70)}%`, 449, 130);
    ctx.fillText(`HTML5/CSS3：${parseInt(tag * 100 / 2 * 0.6)}%`, 449, 230);
    ctx.fillText(`jQuery/Express/Webpack：${parseInt(tag * 100 / 2 * 0.62)}%`, 449, 330);
    ctx.fillText(`百分百还原设计稿，遵循W3C规则，标签语义`, 470, 60)
    ctx.fillText(`化。`, 470, 85)
    
    ctx.fillText(`熟悉Ajax、jsonp技术，使用JavaScript与`, 470, 160)
    ctx.fillText(`jQuery，使用oop或fp方式编程。`, 470, 185)
    
    ctx.fillText(`了解并能使用CSS3、HTML5提供的新的功能与`, 470, 260)
    ctx.fillText(`标签以及响应式布局方法。`, 470, 285)
    
    ctx.fillText(`熟悉使用jQuery、bootstrap、express、`, 470, 360)
    ctx.fillText(`webpack、gitbash、npm等框架或工具。`, 470, 385)
    
    
    if (ftag == 200) {
      clearInterval(global.tim)
    }
  }
  function SkillNumber() {
    showCanvas(ftag)
    global.tim = setInterval(function () {
      ftag += 2
      showCanvas(ftag)
    }, 20)
  }
  return {
    star: SkillNumber
  }

})()

module.exports.SkillCanvas = SkillCanvas
