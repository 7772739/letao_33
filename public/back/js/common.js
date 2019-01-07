// NProgress.start();//开启
// NProgress.done();//结束
$(document).ajaxStart(function(){
    NProgress.start();
});
$(document).ajaxStop(function(){
    NProgress.done();
})
$(function () {
    $('.left .category').click(function () {
        $(this).next().stop().slideToggle();
    })
    $('.icon_menu').click(function () {
        $('.left').toggleClass("hidemenu");
        $('.topbar').toggleClass("hidemenu");
        $('.main').toggleClass("hidemenu");
    })
    $('.icon_logout').click(function () {
        $('#logoutModal').modal("show");
    });
    $('#logoutBtn').click(function () {
        $.ajax({
            type: "get",
            url: "/employee/employeeLogout",
            dataType: "json",
            success: function (info) {
                console.log(info);
                if (info.success) {
                    location.href = "login.html";
                }
            }
        })
    })
})
