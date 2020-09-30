$(function () {
    $('.login-btn').click(function () {
        var account = $('#account').val()
        var pwd = $('#pwd').val()
        console.log(account,pwd)
        if (pwd=='' || account==''){
            alert('Type something....')
            return
        }else{
            window.location.href = './home.html'
        }
    })
    $('.register-btn').click(function () {
        var account = $('#account').val()
        var pwd = $('#pwd').val()
        console.log(account,pwd)
        if (pwd=='' || account==''){
            alert('Type something....')
            return
        }else{
            alert('Register successfully !')
            window.location.href = './home.html'
        }
    })
})