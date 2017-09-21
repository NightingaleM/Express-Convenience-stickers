
var Ispc = (function () {
  var uAgent = navigator.userAgent.toLowerCase()
  console.log(uAgent)

  var reg = /(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone)/i

  if (reg.test(uAgent)) {
    console.log('这是手机')
    if(location.pathname == '/mobile') return 
    location.href = '/mobile'
  }else{
    if(location.pathname == '/') return     
    console.log('这是PC')
    location.href = '/'
  }
})()

module.exports.Ispc = Ispc;
