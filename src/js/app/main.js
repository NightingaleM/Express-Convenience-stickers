require('less/main.less')

var Event = require('mod/event.js')
var FullPage = require('mod/main/fullpage.js').Fullpage
var Isay = require('mod/main/say.js').Isay
var Ispc = require('mod/ispc.js').Ispc

// var fullp = new Fullpage($('#pageLayout'))
// new Isay($('.say'), $('.myself'))

// new Ispc()

new FullPage($('#pageLayout'))


new Isay($('.say'), $('.myself'))

// ChangeHeight($('.static'), 80,'HTML+CSS')
// ChangeHeight($('.dynamic'), 75,'JAVASCRIPT')
// ChangeHeight($('.phone'), 70,'HTML5+CSS3')
// ChangeHeight($('.frame'), 70,'JQ,VUE,REACT')