var Fullpage = require('mod/main/fullpage.js').Fullpage
var Toast = require('mod/toast.js').Toast

var Chat = (function () {
  var fullpage = new Fullpage($('#pageLayout'))
  var $Chat = $('#chacha')
  var $navigations = $('#chacha #navigations ul')
  var chatbox = false
  var defaultChat = {
    id: '',
    $content: $('#chat-box'),
    chatText: '',
    color: ''
  }

  var fChat = {}
  var id
  var pcolor = color()
  $('#sendchat').css({ 'background-color': pcolor })
  $('#hidchat').css({ 'background-color': pcolor })
  loadingHistory()
  sendchat()

  function color() {
    console.log('颜色运行')
    var colorBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    var color = ''
    for (let i = 0; i < 6; i++) {
      index = parseInt(Math.random() * 16, 10)
      color += colorBox[index]
    }
    return '#' + color
  }

  function loadingHistory() {
    console.log('加载历史运行')

    $.get('chat/chats').done(
      function (ret) {
        if (ret.status === 0) {
          $.each(ret.data, function (index, article) {
            createChat({
              id: article.id,
              chatText: article.chatText,
              color: article.headColor
            })
          })
        } else {
          Toast(ret.errorMsg)
        }
      }
    ).fail(function () {
      Toast('网络错误')
    })
  }

  function sendchat() {
    console.log('发送按钮运行')

    $('#sendchat').on('click', function () {
      var ctext = $('#chatbox').html()
      if (!$('#chatbox').html()) {
        console.log('内容不能为空')
      } else {
        $.post('/chat/chat/add', {
          chatText: ctext,
          headColor: pcolor
        }).done(function (ret) {
          if (ret.status === 0) {
            console.log(ret)
            createChat({
              chatText: ctext,
              color: pcolor
            })
            $('#chatbox').html('')
          } else {
            Toast('发送失败')
          }
        })
      }
    })
  }
  function createChat(opt) {
    Object.assign(fChat, defaultChat, opt)
    if (fChat.id) {
      id = fChat.id
    }
    var $chatbox = $(`<div class="sbsay">
    <div class="sbhead"></div>
    <div class="textbox">
    </div>
  </div>`)
    var $textbox = $chatbox.find('.textbox')
    var $sbhead = $chatbox.find('.sbhead')
    $textbox.html(fChat.chatText)
    $sbhead.data({id: fChat.id})
    $sbhead.css({
      "border": "20px solid " + fChat.color,
      "border-right": "20px solid transparent",
      "border-radius": "50%"
    })
    $chatbox.appendTo(fChat.$content)
    $('#chat-box').scrollTop(10000)
    console.log(scrollY)
  }

  //---------------------------------------------------
  function guide() {
    $navigations.on('click', 'li', function () {
      var index = $(this).index()
      fullpage.changePage(index).then(() => {
        fullpage.currentIdx = index
        fullpage.saythat()
      }, () => { })
      if (index == 4) {
        showchat().then(() => {
          chatbox = true
        }, () => {
          chatbox = false
        })
      }
    })
  }

  function showchat() {
    return new Promise((resolve, reject) => {
      if (!chatbox) {
        $Chat.css({ right: 0 })
        resolve()
      } else if (chatbox) {
        $Chat.css({ right: '-360px' })
        reject()
      }
    })
  }
  function hidchat() {
    $('#hidchat').on('click', function () {
      $Chat.css({ right: '-360px' })
      chatbox = false
    })
  }

  //---------------------------------------------------



  return {
    guide: guide,
    hidchat: hidchat
  }


})()



module.exports.Chat = Chat