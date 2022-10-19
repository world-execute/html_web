function closeform(){
    $('[name=loginform]').fadeOut(200);
    $('[name=registerform]').fadeOut(200);
}
function showloginform(){
    if(localStorage.getItem("user")== null){
            $('[name=loginform]').fadeIn(1000);
        }    

}

function outlogin(){
    var storage = window.localStorage;
    storage.removeItem("user");
    storage.removeItem("flag");
    storage.removeItem("phone");
    storage.removeItem("older");
    storage.removeItem("shop01");
    storage.removeItem("shop02");
    storage.removeItem("shop03");
    storage.removeItem("shop04");
    location.reload();
}

function openRegister(){
    $('[name=loginform]').hide();
    $('[name=registerform]').fadeIn(1000);
}

function closeformAndOpenloginform(){
    $('[name=registerform]').hide();
    $('[name=loginform]').fadeIn(1000);
    
}

$(document).ready(function(){
    setTimeout(function(){
        if(localStorage.getItem("flag")=="false"){
            alert("密码与账户名不匹配");
            $('[name=loginform]').fadeIn(1000);
        }
        if(localStorage.getItem("flag") != "false"){
            if(localStorage.getItem("user")!= null){
                document.getElementById("welcomeSpan").innerHTML= ""+localStorage.getItem("user")
                document.getElementById("btn1").innerHTML= ""+localStorage.getItem("user")
                $('input[name="Cname"]').val(localStorage.getItem("user"))
                $('input[name="Cphone"]').val(localStorage.getItem("phone"))

                $('#btn1').focus(function (){
                    $('#btn2').fadeIn(500);
                })
                $('#btn1').blur(function (){
                    $('#btn2').fadeOut(500);
                })
            }
        }
        if(localStorage.getItem("user")!= null){
            if(localStorage.getItem("flag")=="true"){
                    // 库存设置
                    var storage = window.localStorage;
                    storage.setItem("stock01",100);
                    storage.setItem("stock02",100);
                    storage.setItem("stock03",100);
                    storage.setItem("stock04",100);
                    $('#welcome').fadeIn(500);
                setTimeout(function(){
                    $('#welcome').fadeOut(500,function(){
                        var storage = window.localStorage;
                        storage.removeItem("flag");
                    });
                },2000);
            }
        }
        if(localStorage.getItem("older")=="true"){
            $("#older").fadeIn(500);
            $("#older").delay(1000).fadeOut(500,function(){
                var storage = window.localStorage;
                storage.removeItem("older");
            });    
        }    
    },500);
    
    

    // 用来切换子页面的别瞅了
    var left = $(".outbox").css("left")
    var div = $('.index01').css("width")
    // 获取的子页宽度带有单位px，所以要去掉，可以使用substring截取左侧四个数字
    div = div.substring(0,left.length+2)
    left = left.substring(0,left.length+2)
    // substring处理完的数据时String类型的，要转型才能做算术运算
    div = parseInt(div)
    left = parseInt(left)

    // 用户改变网页尺寸时刷新
    $(window).resize(function(){
        window.location.reload()
    })

    var flagIndex02 = 0;
    // var onwidth = $(".outbox").css("left")
    // onwidth = onwidth.substring(0,onwidth.length+2)
    // onwidth = parseInt(onwidth)
    // console.log(onwidth)
    // if(onwidth == div){
    //     $("#shop01").delay(500).slideDown(500);
    // }
    
    $("label[name='label1']").click(function(){
        // console.log(div)
        $(".outbox").css("left",0+"px");
        hideIndex02();
    })
    $("label[name='label2']").click(function(){
        $(".outbox").css("left",-div);
        if($("#details01").css("display")!="none"){
            hideIndex02();
        }
        if($("#details02").css("display")!="none"){
            hideIndex02();
        }
        if($("#details03").css("display")!="none"){
            hideIndex02();
        }
        if($("#details04").css("display")!="none"){
            hideIndex02();
        }
        showIndex02();
    })
    $("label[name='label3']").click(function(){
        $(".outbox").css("left",-2*div);
        hideIndex02();
        if(localStorage.getItem("shop01")==1){
            $("#shoppingCart01").delay(500).fadeIn(500);
            showDelete();
        }
        if(localStorage.getItem("shop02")==1){
            $("#shoppingCart02").delay(500).fadeIn(500);
            showDelete();
        }
        if(localStorage.getItem("shop03")==1){
            $("#shoppingCart03").delay(500).fadeIn(500);
            showDelete();
        }
        if(localStorage.getItem("shop04")==1){
            $("#shoppingCart04").delay(500).fadeIn(500);
            showDelete();
        }

    })

    function showDelete(){
        $("#deleteCar").slideDown(500);
        $("#upCar").delay(500).slideDown(500);
        $("#carnav").delay(700).fadeIn(500);
        $(".order").delay(700).fadeIn(500);
    }

    $("label[name='label4']").click(function(){
        $(".outbox").css("left",-3*div);
        hideIndex02();
    })

    var i = 1;
    $(window).scroll(function(){
        console.log('scroll')
        $(".outbox").css("left",i*div);
        i++;
    })

    

    // js鼠标滚轮监听测试
    // 给页面绑定鼠标滚轮事件，针对Google内核浏览器
    // window.addEventListener("wheel", myFunction);
    var i = 0;
    var num = 0;  // 鼠标滚动次数计数
    function myFunction(e) {
        if(e.wheelDelta>1){
            console.log('上滚')
            console.log(e.wheelDelta)
            num++;
            if(i>0 && (num%4==0)){ 
                i--;
                $(".outbox").css("left",-(i*div))
                console.log(i)
            }
        }else if(e.wheelDelta<-1){
            console.log('下滚')
            console.log(e.wheelDelta)
            num++;
            if(i<3 && (num%4==0)){
                i++
                $(".outbox").css("left",-(i*div))
                console.log(i)
                
            }
        }
        
        switch (i){
            case 0:$(':radio[id="nav-item-1"]').eq(0).prop("checked",true);
            hideIndex02() ;
            break;
            case 1:$(':radio[id="nav-item-2"]').eq(0).prop("checked",true);
            showIndex02();
            break;
            case 2:$(':radio[id="nav-item-3"]').eq(0).prop("checked",true);
            hideIndex02() ;
            break;
            case 3:$(':radio[id="nav-item-4"]').eq(0).prop("checked",true); 
            break;
        }

    }
});

function showIndex02(){
    $("#shop01").slideDown(500);
    $("#shop02").delay(500).slideDown(500);
    $("#shop03").delay(1000).slideDown(500);
    $("#shop04").delay(1500).slideDown(500);
}
function hideIndex02(){
    var shopWidth01 = $('#shop01').css("width")
    shopWidth01 = shopWidth01.substring(0,shopWidth01.length+2)
    shopWidth01 = parseInt(shopWidth01)
    if(shopWidth01>500){
        $("#close01").trigger("click");
    }
    var shopWidth02 = $('#shop02').css("width")
    shopWidth02 = shopWidth02.substring(0,shopWidth02.length+2)
    shopWidth02 = parseInt(shopWidth02)
    if(shopWidth02>500){
        $("#close02").trigger("click");
    }
    var shopWidth03 = $('#shop03').css("width")
    shopWidth03 = shopWidth03.substring(0,shopWidth03.length+2)
    shopWidth03 = parseInt(shopWidth03)
    if(shopWidth03>500){
        $("#close03").trigger("click");
    }
    var shopWidth04 = $('#shop04').css("width")
    shopWidth04 = shopWidth04.substring(0,shopWidth04.length+2)
    shopWidth04 = parseInt(shopWidth04)
    if(shopWidth04>500){
        $("#close04").trigger("click");
    }
    // $("#close02").trigger("click");
    // $("#close03").trigger("click");
    // $("#close04").trigger("click");
    $("#shop01").fadeOut(300);
    $("#shop02").delay(300).fadeOut(300);
    $("#shop03").delay(600).fadeOut(300);
    $("#shop04").delay(900).fadeOut(300);
}

function chicklogin() {
    var name = $('[name=loginusername]').val();
    var password = $('[name=loginuserpwd]').val();
    var storage = window.localStorage;
    storage.setItem("user",name);
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

    if (password != '') {
        if (/[@#\$%\^&\*]+/gi.test(name)) { //验证是否含有特殊字符
            alert('密码不能带有特殊字符')
            return false;
        }    
    } else {
        alert('密码不能为空')
        return false;
    }
    return true
}
function socketChange(s){
    var storage = window.localStorage;
    var number = $("input[name='number0"+s+"']").val()
    var stock = storage.getItem("stock0"+s)
    storage.setItem("stock0"+s,stock-number)
}
function chickOlder(){
    socketChange("1");
    socketChange("2");
    socketChange("3");
    socketChange("4");
    var storage = window.localStorage;
        storage.removeItem("shop01");
        storage.removeItem("shop02");
        storage.removeItem("shop03");
        storage.removeItem("shop04");
    

    var name = $('input[name="Cname"]').val();
    var phoneNumber = $('input[name="Cphone"]').val();
    var address = $('input[name="Caddress"]').val();
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
    
    if(address == ''){
        alert('请填写收货地址')
        return false;
    }
}