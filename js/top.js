window.onload = function tt(){
    var top = document.getElementById("top");
    var u = 0;
    var scrollFunc = function (e) { 
        e = e || window.event; 
        //先判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta) {         
            if (e.wheelDelta > 0) { 
               console.log("滑轮向上滚动");  
               u = 1;
               return u;
            }  
            if (e.wheelDelta < 0) { 
               console.log("滑轮向下滚动"); 
               u = 2;
               return u;
            }  
        //Firefox滑轮事件   
        } else if (e.detail) { 
            if (e.detail> 0) { 
               console.log("滑轮向上滚动"); 
               u = 1;
               return u; 
            }  
            if (e.detail< 0) { 
                console.log("滑轮向下滚动");  
                u = 2;
               return u;
            }  
        }  
        
    }
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
    }  
    window.onmousewheel = document.onmousewheel = scrollFunc;


    document.body.onscroll = function (){
        var mtop = document.documentElement.scrollTop;
        var btop = document.documentElement.offsetHeight;
        var cheight = document.documentElement.clientHeight;
        var j = btop - mtop - 489 - cheight;
        var k = mtop -  (btop - 489 - cheight);
        console.log(mtop);
        if (u == 2){
            if (mtop >= 100){
                top.style.display = "block";
                if (j > 5){
                    top.style.bottom = 100 + 'px';
                }else{
                    top.style.bottom = k + 'px';
                }
            }else{
                top.style.display = "none";
            }
        }else if(u == 1){
            if(mtop == 0){
                top.style.display = "none";
            }else{
                if (j > 5){
                    top.style.bottom = 100 + 'px';
                }else{
                    top.style.bottom = k + 'px';
                }
            }
        }
        
        var timer = null;
        var istop = true;
        if(istop = true){
            clearInterval(timer);
        }else{
            istop = false;
        }
        top.onclick = function (){
            timer = setInterval(function(){
                var mtop = document.documentElement.scrollTop;
                var speed = Math.floor(-mtop/10);
                document.documentElement.scrollTop = mtop + speed;
                istop = true;
                if(mtop == 0){
                    clearInterval(timer);
                }
            },20)
        }
    }
}