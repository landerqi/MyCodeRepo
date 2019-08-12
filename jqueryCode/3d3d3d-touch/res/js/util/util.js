/**
 * Created by Administrator on 14-9-2.
 */
var utils = (function(){

    //设置cookies
    function setCookie(name,value,days){
        var exp=new Date();
        exp.setTime(exp.getTime() + days*24*60*60*1000);
        var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
        document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString();
    }

    //读取cookies
    function getCookie(name){
        var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
        if(arr!=null){
            return unescape(arr[2]);
            return null;
        }
    }

    //删除cookies
    function delCookie(name){
        var exp=new Date();
        exp.setTime(exp.getTime()-1);
        var cval=getCookie(name);

        if(cval!=null){
            document.cookie=name+"="+cval+";expires="+exp.toGMTString();
        }
    }

    return {
        setCookie    :setCookie,
        delCookie    :delCookie,
        getCookie    :getCookie
    };
})();