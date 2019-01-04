// NProgress.start();//开启
// NProgress.done();//结束
$(document).ajaxStart(function(){
    NProgress.start();
});
$(document).ajaxStop(function(){
    NProgress.done();
})