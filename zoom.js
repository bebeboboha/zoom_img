$(document).ready(function() {
    $('.pic').mouseenter(function() {
        $(this).append('<img class="zoomin" src="' + $(this).find('.zoom').attr('src') + '">')
    })
    $('.pic').mouseleave(function() {
        $(this).find('.zoomin').remove()
    })
    $('.pic').mousemove(function(e) {
        $(this).find('.zoomin').css('top', -e.pageY)
        $(this).find('.zoomin').css('left', -e.pageX)
    })
})
