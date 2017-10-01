require('less/main.less')

var Event = require('mod/event.js')
// var FullPage = require('mod/main/fullpage.js').Fullpage
var Isay = require('mod/main/say.js').Isay
var Ispc = require('mod/ispc.js').Ispc
var Chat = require('mod/main/chacha.js').Chat


// var fullp = new Fullpage($('#pageLayout'))
// new Isay($('.say'), $('.myself'))

// new Ispc()

// new FullPage($('#pageLayout'))
Chat.guide()
Chat.hidchat()

new Isay($('.say'), $('.myself'))

