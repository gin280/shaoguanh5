require.config({
    paths: {
        jquery:'//cdn.bootcss.com/jquery/2.1.4/jquery.min',
        video:'//cdn.bootcss.com/video.js/4.12.8/lang/zh-CN',
        lodash:'lodash',
        toTop:'jquery.toTop.min',
        a:'a',
        slick:'slickjs/slick/slick.min',
        tab:'tab'
    }
});

require(['jquery','video','lodash','toTop','a','tab','slick'],function($,v,_,toTop,a,tab,slick) {
    $('body').click(function() {
        $(this).html('');
    })

});