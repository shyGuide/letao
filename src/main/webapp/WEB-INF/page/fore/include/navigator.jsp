<%@ page contentType="text/html;charset=UTF-8" %>
<link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/fore/fore_nav.css"/>
<script>
    $(function () {
        $(".quick_li").find("li").hover(
            function () {
                $(this).find(".sn_menu").addClass("sn_menu_hover");
                $(this).find(".quick_menu,.quick_qrcode,.quick_DirectPromoDiv,.quick_sitmap_div").css("display", "block");
            }, function () {
                $(this).find(".sn_menu").removeClass("sn_menu_hover");
                $(this).find(".quick_menu,.quick_qrcode,.quick_DirectPromoDiv,.quick_sitmap_div").css("display", "none");
            }
        );
    });
</script>
<div id="nav">
    <div class="nav_main">
        <p id="container_login">
            <c:choose>
                <c:when test="${requestScope.user.user_name==null}">
                    <em>hi，欢迎来乐淘</em>
                    <a href="${pageContext.request.contextPath}/login">请登录</a>
                    <a href="${pageContext.request.contextPath}/register">免费注册</a>
                </c:when>
                <c:otherwise>
                    <em>Hi，</em>
                    <a href="${pageContext.request.contextPath}/userDetails" class="userName"
                       target="_blank">${requestScope.user.user_name}</a>
                    <a href="${pageContext.request.contextPath}/login/logout">退出</a>
                </c:otherwise>
            </c:choose>
        </p>
        <ul class="quick_li">
            <li class="quick_li_MyTaobao">
                <div class="sn_menu">
                    <a href="${pageContext.request.contextPath}/order/0/10">我的乐淘<b></b></a>
                </div>
            </li>
            <li class="quick_li_cart">
                <img src="${pageContext.request.contextPath}/res/images/fore/WebsiteImage/buyCar.png">
                <a href="${pageContext.request.contextPath}/cart">购物车</a>
            </li>
            <li class="quick_li_separator"></li>
            <li class="quick_li_mobile">
                <img src="${pageContext.request.contextPath}/res/images/fore/WebsiteImage/mobile.png">
                <a href="#">手机版</a>
            </li>
            <li class="quick_home"><a href="http://www.letao.com">乐淘网</a></li>
            <li class="quick_DirectPromo">
                <div class="sn_menu">
                    <a href="#">商家支持<b></b></a>
                </div>
            </li>
            <li class="quick_sitemap">
                <div class="sn_menu">
                    <a href="#">网站导航<b></b></a>
                </div>
            </li>
        </ul>
    </div>
</div>