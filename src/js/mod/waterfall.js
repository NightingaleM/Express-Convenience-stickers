var Waterfall = (function () {
  var $content,
    $items
  function renden(content) {
    $content = content
    $items = $content.children()
    $items.removeClass('note-c').addClass('note')

    var itemWidth = $items.outerWidth(true),
      colNum = parseInt($(window).width() / itemWidth),
      colSumHeight = []
    console.log("元素宽度" + itemWidth)
    console.log("可摆放的列数" + colNum)


    for (let i = 0; i < colNum; i++) {
      colSumHeight.push(0)
    }
    console.log("数组" + colSumHeight)
    $items.each(function (index, tag) {
      $tag = $(tag)

      var minHeight = colSumHeight[0],
        minCol = 0

      for (let i = 0; i < colSumHeight.length; i++) {
        if (colSumHeight[i] < minHeight) {
          minHeight = colSumHeight[i]
          minCol = i
        }
      }

      var itemHeigth = $tag.outerHeight(true)
      colSumHeight[minCol] = itemHeigth + colSumHeight[minCol]

      $tag.css({
        'left': itemWidth * minCol,
        'top': minHeight,
        'bottom': ''
      })

    })

  }

  $(window).on('resize', function () {
    renden($content)
  })

  return {
    init: renden
  }
})()



module.exports = Waterfall



//Waterfall.init('ct')