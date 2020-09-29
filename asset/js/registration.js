$(function () {
    $('.login-btn').click(function () {
        var account = $('#account').val()
        var pwd = $('#pwd').val()
        console.log(account,pwd)
        if (pwd=='' || account==''){
            alert('账号密码不能为空！')
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
            alert('账号密码不能为空！')
            return
        }else{
            alert('注册成功')
            window.location.href = './home.html'
        }
    })
})