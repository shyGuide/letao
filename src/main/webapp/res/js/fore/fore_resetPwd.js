$(function () {

    //用户登录名input获取光标
    $("#user_name").focus(function () {
        $(this).css("border", "1px solid #3879D9")
            .next().text("请输入用户登录名").css("display", "inline-block").css("color", "#00A0E9");
    });

    //用户姓名input获取光标
    $("#user_realname").focus(function () {
        $(this).css("border", "1px solid #3879D9")
            .next().text("请输入用户姓名").css("display", "inline-block").css("color", "#00A0E9");
    });
    //密码input获取光标
    $("#user_password").focus(function () {
        $(this).css("border", "1px solid #3879D9")
            .next().text("请输入密码").css("display", "inline-block").css("color", "#00A0E9");
    });
    //再次输入密码input获取光标
    $("#user_password_one").focus(function () {
        $(this).css("border", "1px solid #3879D9")
            .next().text("请再次输入密码").css("display", "inline-block").css("color", "#00A0E9");
    });

    //input离开光标
    $(".form-text").blur(function () {
        $(this).css("border-color", "#cccccc")
            .next().css("display", "none");
    });

    //非空验证
    $("#register_sub").click(function () {
        //用户登录名
        var user_name = $.trim($("input[name=user_name]").val());
        //用户姓名
        var user_realname = $.trim($("input[name=user_realname]").val());
        //密码
        var user_password = $.trim($("input[name=user_password]").val());
        //确认密码
        var user_password_one = $.trim($("input[name=user_password_one]").val());


        //验证密码的格式 包含数字和英文字母
        var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
        if (user_name == null || user_name === "") {
            $("#user_name").css("border", "1px solid red")
                .next().text("请输入用户登录名").css("display", "inline-block").css("color", "red");
            return false;
        } else if (user_realname == null || user_realname === ""){
            $("#user_realname").css("border", "1px solid red")
                .next().text("请输入用户姓名").css("display", "inline-block").css("color", "red");
            return false;
        }  else if (user_password == null || user_password === "") {
            $("#user_password").css("border", "1px solid red")
                .next().text("请输入密码").css("display", "inline-block").css("color", "red");
            return false;
        } else if (user_password_one == null || user_password_one === "") {
            $("#user_password_one").css("border", "1px solid red")
                .next().text("请重复输入密码").css("display", "inline-block").css("color", "red");
            return false;
        }else if(!reg.test(user_password)){
            $("#user_password").css("border", "1px solid red")
                .next().text("密码格式必须包含数字和字母").css("display", "inline-block").css("color", "red");
            return false;
        } else if (user_password !== user_password_one) {
            $("#user_password_one").css("border", "1px solid red")
                .next().text("两次输入密码不相同").css("display", "inline-block").css("color", "red");
            return false;
        }
        $.ajax({
            type: "POST",
            url: "/resetPwd/doResetPwd",
            data: {
                "user_name": user_name,
                "user_realname": user_realname,
                "user_password": user_password
            },
            dataType: "json",
            success: function (data) {
                if (data.success) {
                    $(".msg").stop(true, true).animate({
                        opacity: 1
                    }, 550, function () {
                        $(".msg").animate({
                            opacity: 0
                        }, 1500, function () {
                            location.href = "/login";
                        });
                    });
                } else {
                    $("#user_name").css("border", "1px solid red")
                        .next().text(data.msg).css("display", "inline-block").css("color", "red");
                }
            },
            error: function (data) {
                location.reload(true);
            },
            beforeSend: function () {
            }
        });
    });
});

