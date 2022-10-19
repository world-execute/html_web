window.onload = function () {
    
    
    window.setInterval(autoChange,4000);
    let carou = document.getElementById('Carousel').getElementsByTagName("div")
    over_index = 0

    function autoChange(){
        over_index++
        if(over_index==3){
            over_index=0
        }

        /*秘诀：废案封印之术 */
        // if(over_index==0){
        //     $("#demo1").fadeOut(500)
        //     $("#demo2").delay(500).fadeIn(500)
        // }
        // if(over_index==1){
        //     $("#demo2").fadeOut(500)
        //     $("#demo3").delay(500).fadeIn(500)
        // }
        // if(over_index==2){
        //     $("#demo3").fadeOut(500)
        //     $("#demo1").delay(500).fadeIn(500)
        // }
        switch(over_index){
            case 0:$("#demo1").fadeOut(1000)
            $("#demo2").delay(100).fadeIn(800)
                break;
            case 1:$("#demo2").fadeOut(1000)
            $("#demo3").delay(100).fadeIn(800)
                break;
            case 2:$("#demo3").fadeOut(1000)
            $("#demo1").delay(100).fadeIn(800)
                break;
        }
        // console.log(over_index)
    }
}

// 这像dogShit的项目我是一分钟也做不下去了

//            / $$        /$$    /$$    
//            | $$       |__/   | $$    
//   /$$$$$$$ | $$$$$$$   /$$  /$$$$$$  
//  /$$_____/ | $$__  $$ | $$ |_  $$_/  
// |  $$$$$$  | $$  \ $$ | $$   | $$    
// \____  $$  | $$  | $$ | $$   | $$ /$$
// /$$$$$$$/  | $$  | $$ | $$   | $$$$/
// |_______/  |__/  |__/ |__/   \____/  
//

//下面是控制index02的jq
$(document).ready(function(){
    showme()
    var s1 = $("#shop01")
    var s2 = $("#shop02")
    var s3 = $("#shop03")
    var s4 = $("#shop04")
    // var shopBox = $(".index02>div")

    var shopWidth = $('#shop01').css("width")
    shopWidth = shopWidth.substring(0,shopWidth.length+2)
    shopWidth = parseInt(shopWidth)
    var storage = window.localStorage;

    $("#open01").click(function(){
        var sort1 = storage.getItem("stock01")
        $("#stock01").text(sort1)
        s4.fadeOut(500)
        s3.delay(200).fadeOut(500)
        s2.delay(500).fadeOut(500,function(){
            s1.animate({
                "opacity":0.1,
                "width":shopWidth*4.4
            },1000,function(){
                s1.css("background","rgba(0, 0, 0, 0.5)")
                s1.animate({
                    "opacity":1,
                })
                $("#details01").fadeIn(500)
                $("#close01").fadeIn(500)
            })
        })
        $("#open01").fadeOut(500)
    })
    $("#close01").click(function(){
        
        $("#close01").fadeOut(500)
        $("#details01").fadeOut(500,function(){
            s1.animate({
                "opacity":0.1,
                "width":shopWidth
            },1000,function(){
                s1.css("background","url('./img/shop01.png')")
                s1.css("background-size", "cover")
                s1.animate({
                    "opacity":1,
                },function(){
                    $("#open01").fadeIn(500)
                })
                s2.fadeIn(500) 
                s3.delay(200).fadeIn(500)
                s4.delay(500).fadeIn(500)
            })
        })
    })

    
    $("#open02").click(function(){
        var sort2 = storage.getItem("stock02")
        $("#stock02").text(sort2)
        s4.fadeOut(500)
        s3.delay(200).fadeOut(500)
        s1.delay(500).fadeOut(500,function(){
            s2.animate({
                "opacity":0.1,
                "left":1+"%",
                "width":shopWidth*4.4
            },1000,function(){
                s2.css("background","rgba(0, 0, 0, 0.5)")
                s2.animate({
                "opacity":1,
            })
                $("#details02").fadeIn(500)
                $("#close02").fadeIn(500)
            })
        })
        $("#open02").fadeOut(500)
    })
    $("#close02").click(function(){
        $("#close02").fadeOut(500)
        $("#details02").fadeOut(500,function(){
            s2.animate({
                "opacity":0.1,
                "left":25+"%",
                "width":shopWidth
            },1000,function(){
                s2.css("background","url('./img/shop02.png')")
                s2.css("background-size", "cover")
                s2.animate({
                    "opacity":1,
                },function(){
                    $("#open02").fadeIn(500)
                })
                s1.fadeIn(500) 
                s3.delay(200).fadeIn(500)
                s4.delay(500).fadeIn(500)
            })
        })
    })
    
    $("#open03").click(function(){
        var sort3 = storage.getItem("stock03")
        $("#stock03").text(sort3)
        s4.fadeOut(500)
        s2.delay(200).fadeOut(500)
        s1.delay(500).fadeOut(500,function(){
            s3.animate({
                "opacity":0.1,
                "left":1+"%",
                "width":shopWidth*4.4
            },1000,function(){
                s3.animate({
                    "opacity":1,
                })
                s3.css("background","rgba(0, 0, 0, 0.5)")
                $("#details03").fadeIn(500)
                $("#close03").fadeIn(500)
            })
        })
        $("#open03").fadeOut(500)
    })
    $("#close03").click(function(){
        $("#close03").fadeOut(500)
        $("#details03").fadeOut(500,function(){
            s3.animate({
                "opacity":0.1,
                "left":50+"%",
                "width":shopWidth
            },1000,function(){
                s3.css("background","url('./img/shop03.png')")
                s3.css("background-size", "cover")
                s3.animate({
                    "opacity":1,
                },function(){
                    $("#open03").fadeIn(500)
                })
                s1.fadeIn(500) 
                s2.delay(200).fadeIn(500)
                s4.delay(500).fadeIn(500)
            })
        })
    })


    
    $("#open04").click(function(){
        var sort4 = storage.getItem("stock04")
        $("#stock04").text(sort4)
        s1.fadeOut(500)
        s2.delay(200).fadeOut(500)
        s3.delay(500).fadeOut(500,function(){
            s4.animate({
                "opacity":0.1,
                "left":1+"%",
                "width":shopWidth*4.4
            },1000,function(){
                s4.animate({
                    "opacity":1,
                })
                s4.css("background","rgba(0, 0, 0, 0.5)")
                $("#close04").fadeIn(500)
                $("#details04").fadeIn(500)
            })
        })
        $("#open04").fadeOut(500)
    })
    $("#close04").click(function(){
        $("#close04").fadeOut(500)
        $("#details04").fadeOut(500,function(){
            s4.animate({
                "opacity":0.1,
                "left":75+"%",
                "width":shopWidth
            },1000,function(){
                s4.css("background","url('./img/shop04.png')")
                s4.css("background-size", "cover")
                s4.animate({
                    "opacity":1,
                },function(){
                    $("#open04").fadeIn(500)
                })
                s1.fadeIn(500) 
                s2.delay(200).fadeIn(500)
                s3.delay(500).fadeIn(500)
            })
        })
    })

    //防伪标识
    function showme(){
    console.log("  $$\\      $$\\                 $$\\                 $$$$$$$\\                   $$$$$$\\  $$\\   $$\\ $$$$$$$\\     "+"\n"+
                "  $$$\\    $$$ |                $$ |                $$  __$$\\                 $$  __$$\\ $$ |  $$ |$$  __$$\\        "+"\n"+
                "  $$$$\\  $$$$ | $$$$$$\   $$$$$$$ | $$$$$$\\         $$ |  $$ |$$\\   $$\\       $$ /  \\__|\\$$\\ $$  |$$ |  $$ |    "+"\n"+
                "  $$\\$$\\$$ $$ | \\____$$\\ $$  __$$ |$$  __$$\\       $$$$$$$\\ |$$ |  $$ |      $$ |       \\$$$$  / $$ |  $$ |    "+"\n"+
                "  $$ \\$$$  $$ | $$$$$$$ |$$ /  $$ |$$$$$$$$ |      $$  __$$\\ $$ |  $$ |      $$ |       $$  $$<  $$ |  $$ |         "+"\n"+
                "  $$ |\\$  /$$ |$$  __$$ |$$ |  $$ |$$   ____|      $$ |  $$ |$$ |  $$ |      $$ |  $$\\ $$  /\\$$\\ $$ |  $$ |        "+"\n"+
                "  $$ | \\_/ $$ |\\$$$$$$$ |\\$$$$$$$ |\\$$$$$$$\\       $$$$$$$  |\\$$$$$$$ |      \\$$$$$$  |$$ /  $$ |$$$$$$$  |    "+"\n"+
                "  \\__|     \\__| \\_______| \\_______| \\_______|      \\_______/  \\____$$ |       \\______/ \\__|  \\__|\\_______/                               "+"\n"+
                "                                                             $$\\   $$ |                                      "+"\n"+
                "                                                             \\$$$$$$  |   "+"\n"+
                "                                                              \\______/    "
                )
    console.log("made by cxd 曹旭东制作")
    }


    // 购物页面的显示详细参数的设计
    $("#switch01").click(function(){
        // console.log("click")
        // if($("#switch01").text() == "详细参数" ){
        //     $("#para1").slideUp(500,function(){
        //         $("#para01").slideDown(500,function(){
        //             $("#switch01").text("参数简介")
        //         });
        //     })
        // }else{
        //     $("#para01").slideUp(500,function(){
        //         $("#para1").slideDown(500,function(){
        //             $("#switch01").text("详细信息")
        //         })
        //     });
        // }
        switchpara(1)
    })
    
    function switchpara(choose){
        if($("#switch0"+choose+"").text() == "详细参数" ){
            $("#para"+choose).slideUp(500,function(){
                $("#para0"+choose).slideDown(500,function(){
                    $("#switch0"+choose+"").text("参数简介")
                });
            })
        }else{
            $("#para0"+choose+"").slideUp(500,function(){
                $("#para"+choose+"").slideDown(500,function(){
                    $("#switch0"+choose+"").text("详细信息")
                })
            });
        }
    }

    $("#switch02").click(function(){
        switchpara(2)
    })
    $("#switch03").click(function(){
        switchpara(3)
    })
    $("#switch04").click(function(){
        switchpara(4)
    })

    
})

