var bgColors = [
    {
        key: 'background-image',
        value: 'linear-gradient(135deg, rgb(139, 198, 236) 0%, rgb(149, 153, 226) 100%)'
    }, {
        key: 'background',
        value: '#00BCD4'
    }, {
        key: 'background-image',
        value: 'linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)'
    }, {
        key: 'background',
        value: '#a9c9ff'
    }, {
        key: 'background-image',
        value: 'linear-gradient(rgb(169, 201, 255) 0%, rgb(255, 187, 236) 100%)'
    }, {
        key: 'background',
        value: '#9599e2'
    }, {
        key: 'background-image',
        value: 'linear-gradient(19deg, rgb(250, 172, 168) 0%, rgb(221, 214, 243) 100%)'
    }, {
        key: 'background',
        value: 'rgb(96 189 255)'
    },
];
var current_bg_color = JSON.parse(window.localStorage.getItem('bg_color_obj')) ? JSON.parse(window.localStorage.getItem('bg_color_obj')) : bgColors[0];
var current_bg_color_index = window.localStorage.getItem('bg_color_index') ? window.localStorage.getItem('bg_color_index') : 0
$(function () {
    $('.nav-list').css(current_bg_color.key, current_bg_color.value)
    $('.page').css(current_bg_color.key, current_bg_color.value)
    $('.main-container').css(current_bg_color.key, current_bg_color.value)
    var key = 'background-color'
    var value = 'rgba(255, 255, 255, 0.5)'
    $('.nav-item').css(key, value)
    $('.change-btn').css(key, value)
    $('.change-btn').css('border', '2px solid rgba(255, 0, 0, 0)')

    $('.nav-btn.nav-absolute-right').css(key, value)
    $('.top-header').css(key, value)
    $('.nav-item').css('border', '1px solid rgba(255, 0, 0, 0)')
    $('.nav-item').css('box-shadow', 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px')
    $('.nav-btn.nav-absolute-right').css('border', '1px solid rgba(255, 0, 0, 0)')
    $('.nav-btn.nav-absolute-right').css('box-shadow', 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px')
    $('.nav-list').css('box-shadow', 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px')
    $('*').css('color', '#383838')
    $('input').addClass('infoTextarea change')


    var isShowNav = true
    $('.nav-btn').click(function () {
        isShowNav = !isShowNav
        if (isShowNav) {
            $('.nav-btn').removeClass('nav-absolute-left')
            $('.nav-btn').addClass('nav-absolute-right')
        } else {
            $('.nav-btn').addClass('nav-absolute-left')
            $('.nav-btn').removeClass('nav-absolute-right')
        }
        $('.nav-list').toggle('slow')
    })

    $('.change-btn').click(function () {
        if (current_bg_color_index >= bgColors.length - 1) {
            current_bg_color_index = 1
        } else {
            current_bg_color_index++
        }
        current_bg_color = bgColors[current_bg_color_index]
        window.localStorage.setItem('bg_color_obj', JSON.stringify(current_bg_color))
        window.localStorage.setItem('bg_color_index', current_bg_color_index)
        $('.nav-list').css(current_bg_color.key, current_bg_color.value)
        $('.page').css(current_bg_color.key, current_bg_color.value)
        $('.main-container').css(current_bg_color.key, current_bg_color.value)
        var key = 'background-color'
        var value = 'rgba(255, 255, 255, 0.5)'
        $('.nav-item').css(key, value)
        $('.change-btn').css(key, value)
        $('.change-btn').css('border', '2px solid rgba(255, 0, 0, 0)')

        $('.nav-btn.nav-absolute-right').css(key, value)
        $('.top-header').css(key, value)
        $('.nav-item').css('border', '1px solid rgba(255, 0, 0, 0)')
        $('.nav-item').css('box-shadow', 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px')
        $('.nav-btn.nav-absolute-right').css('border', '1px solid rgba(255, 0, 0, 0)')
        $('.nav-btn.nav-absolute-right').css('box-shadow', 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px')
        $('.nav-list').css('box-shadow', 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px')
        $('*').css('color', '#383838')
        $('input').addClass('infoTextarea change')
    })

    $('.morePlayerBtn').click(function () {
        $('.map-modal-container').css('display', 'table')
    })
})

function closeQueueModal() {
    $('.map-modal-container').css('display', 'none')
    window.location.href = '../../gameSpace.html'

}
function goChatRoom() {
    window.location.href = '../../chatRoom.html'
}