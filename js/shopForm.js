$(document).ready(function(){
    var storage = window.localStorage;
    $("#buy01").click(function(){
        storage.setItem("shop01",1);
        showState();
        $("#shop1").attr("name","shop01");
        $("input[name='number01']").val(1);
    })
    $("#buy02").click(function(){
        storage.setItem("shop02",1);
        showState();
        $("#shop2").attr("name","shop02")
        $("input[name='number02']").val(1);
    })
    $("#buy03").click(function(){
        storage.setItem("shop03",1);
        showState();
        $("#shop3").attr("name","shop03")
        $("input[name='number03']").val(1);
    })
    $("#buy04").click(function(){
        storage.setItem("shop04",1);
        showState();
        $("#shop4").attr("name","shop04")
        $("input[name='number04']").val(1);
    })
    
    function showState(){
        $("#state").fadeIn(500)
        $("#state").delay(1000).fadeOut(500)
    }

    $("#deleteCar").click(function(){
        $("#shoppingCart01").fadeOut(500);
        $("#shoppingCart02").fadeOut(500);
        $("#shoppingCart03").fadeOut(500);
        $("#shoppingCart04").fadeOut(500);
        storage.removeItem("shop01");
        storage.removeItem("shop02");
        storage.removeItem("shop03");
        storage.removeItem("shop04");
        upDeleteAll()
    })

    $("#delete01").click(function(){
        $("#shoppingCart01").fadeOut(500);
        storage.removeItem("shop01");
        $("#shop1").attr("name","null");
        upDeleteAll();
    })
    $("#delete02").click(function(){
        $("#shoppingCart02").fadeOut(500)
        storage.removeItem("shop02");
        $("#shop2").attr("name","null");
        upDeleteAll();
    })
    $("#delete03").click(function(){
        $("#shoppingCart03").fadeOut(500);
        storage.removeItem("shop03");
        $("#shop3").attr("name","null");
        upDeleteAll();
    })
    $("#delete04").click(function(){
        $("#shoppingCart04").fadeOut(500);
        storage.removeItem("shop04");
        $("#shop4").attr("name","null");
        upDeleteAll();
    })

    function upDeleteAll(){
        let s1 = localStorage.getItem("shop01");
        let s2 = localStorage.getItem("shop02");
        let s3 = localStorage.getItem("shop03");
        let s4 = localStorage.getItem("shop04");

        if(s1==null && s2 == null && s3 == null && s4 ==null){
            $("#deleteCar").slideUp(500);
            $("#upCar").delay(500).slideUp(500);
            $("#carnav").delay(700).fadeOut(500);
            $(".order").delay(700).fadeOut(500,function(){
                $("#shop1").attr("name","null");
                $("#shop2").attr("name","null");
                $("#shop3").attr("name","null");
                $("#shop4").attr("name","null");
            });
        }
    }

    $("#pluebtn1").click(function(){
        plue(1,28999)
    })
    $("#reduce1").click(function(){
        reduce(1,28999)
    })
    $("#pluebtn2").click(function(){
        plue(2,17299)
    })
    $("#reduce2").click(function(){
        reduce(2,17299)
    })
    $("#pluebtn3").click(function(){
        plue(3,15555)
    })
    $("#reduce3").click(function(){
        reduce(3,15555)
    })
    $("#pluebtn4").click(function(){
        plue(4,9877)
    })
    $("#reduce4").click(function(){
        reduce(4,9877)
    })

    function plue(s,priceold){
        number=$("input[name='number0"+s+"']").val()
        price=$("input[name='price0"+s+"']").val()
        number=parseInt(number)
        price=price.substring(1,6)
        console.log(price)
        price=parseInt(price)
        if(number<3){
            $("input[name='price0"+s+"']").val("￥"+(price+priceold))
            $("input[name='number0"+s+"']").val(number+1)
        }else{
            alert("最多只能购买三件商品")
        }
    }
    function reduce(s,priceold){
        number=$("input[name='number0"+s+"']").val()
        number=parseInt(number)
        price=$("input[name='price0"+s+"']").val()
        price=price.substring(1,6)
        if(number>1){
            $("input[name='number0"+s+"']").val(number-1)
            $("input[name='price0"+s+"']").val("￥"+(price-priceold))
        }
    }

})