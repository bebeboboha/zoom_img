$(document).ready(function() {
    $('.pic').mouseenter(function() {
        $('.pic').append('<img class="zoomin" src="' + $('.zoom').attr('src') + '">')
    })
    $('.pic').mouseleave(function() {
        $('.zoomin').remove()
    })
    $('.pic').mousemove(function(e) {
        $('.zoomin').css('top', -e.pageY)
        $('.zoomin').css('left', -e.pageX)
    })
})
