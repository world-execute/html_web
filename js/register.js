// function closeform(){
//     $("form").fadeOut(1000);
// }
// function showform(){
//     $("form").fadeIn(1000);
// }

function checkRegister() {
    var name = $('[name=username]').val();
    var password = $('[name=userpwd]').val();
    var phoneNumber = $('[name=phone]').val();
    var email = $('[name=email]').val();
    var storage = window.localStorage;
    storage.setItem("phone",phoneNumber);

    //验证姓名
    if (name != '') {
        var names = parseInt(name);//验证是否为数字
        if (isNaN(names)) {
            if (/[@#\$%\^&\*]+/gi.test(name)) { //验证是否含有特殊字符
                alert('用户名不能带有特殊字符')
                return false;
            }
        } else {
            alert("用户名不能是数字");
            return false;
        }
    } else {
        alert('用户名不能为空')
        return false;
    }

    //验证密码
    if (password != '') {
        if (/[@#\$%\^&\*]+/gi.test(name)) { //验证是否含有特殊字符
            alert('密码不能带有特殊字符')
            return false;
        }    
    } else {
        alert('密码不能为空')
        return false;
    }

    //验证手机号码
    if (phoneNumber != '') {
        var tels = parseInt(phoneNumber);//验证是否为数字
        if(!isNaN(phoneNumber)){
            var reg = /(1[3-9]\d{9}$)/;
            if (!reg.test(phoneNumber)) { //验证手机号码格式
                alert("请输入正确格式的手机号码！");
                return false;
            }
        } else{
            alert("联系电话必须是数字");
            return false;
        }
    }else{
        alert('联系电话不能为空')
        return false;
    }

    //验证地址
    if (email != '') {
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(email)) { //验证邮箱号码格式
            alert("请输入正确格式的邮箱地址！");
            return false;
            }
    }else{
        alert('邮箱地址不能为空')
        return false;
    }
}