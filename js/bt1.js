// define(['jquery']),function () {
    function bt1(btdiv,boolean) {
        this.btdiv = btdiv;
        this.boolean = boolean;
    };
    bt1.prototype = {

        // 为某个特定div增加一个主按钮和ul
        addul : function (btname,liname) {
            var _this = this;
            var addul = "" 
                    + "<button id='bt1' class='bt1'>" 
                    +    btname 
                    +    "<span id='bt1Span'>"
                    +    "</span>"
                    + "</button>"
                    + "<ul class='selectBt'>"
                    + "</ul>";
            $(_this.btdiv).append(addul);

                for (var i = 0; i < liname.length; i++) {
                    if (i === liname.length-1) {
                        var lastLi = "<li id='fenge'>" + "</li>"
                            + "<li>" + liname[i] + "</li>";
                        $(_this.btdiv).children("ul").append(lastLi);
                    }
                    else {
                        var otherLi = "<li>" + liname[i] + "</li>";
                        $(_this.btdiv).children("ul").append(otherLi);
                    }
                }
            

            if (this.boolean) {
                $(_this.btdiv).delegate("#bt1","click", function(e) {
                    if ($(this).next().is(":hidden")) {
                        $(this).attr("class","bt1clickColor");
                        $(this).next().show();
                    }
                    else {
                        $(this).next().hide();
                        $(this).attr("class","bt1");
                    }
                    $(document).one("click", function(){
                        $(_this.btdiv).children("ul").hide();
                        $(_this.btdiv).children("#bt1").attr("class","bt1");
                    });
                    // 阻止点击document事件冒泡
                    e.stopPropagation();
                });

                $(_this.btdiv).delegate(".selectBt li","click", function(e){
                    $(this).attr("class","liBgcolor");
                    $(this).siblings().attr("class","siblingsLi");
                    e.stopPropagation();
                });
            }
            else {
                $(_this.btdiv).delegate("#bt1","click",function () {
                    if ($(this).next().is(":hidden")) {
                        $(this).attr("class","bt1clickColor");
                        $(this).next().show();
                    }
                    else {
                        $(this).next().hide();
                        $(this).attr("class","bt1");
                    }
                });
                $(_this.btdiv).delegate(".selectBt li","click",function () {
                    $(this).parent().hide();
                    $(this).parent().prev().attr("class","bt1");
                });
            }

        },

    };
// }
