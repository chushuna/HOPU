// window.onload = function(){
    var oUl = document.getElementsByClassName("clearfix")[0];
    var oLis = oUl.getElementsByTagName("li");
    var oUll = document.getElementById("necontent");
    var oLiss= oUll.getElementsByTagName("li");
    // 获取url参数
    // let url =decodeURI(window.location.href); 
    // console.log(url);
    // let mode = url.split('=');
    // console.log(mode);
    // if(mode[1] = "'detail'"){
    //     oLis[0].className = "newlan-tit";
    //     oLis[1].className = "newlan-tit active";
    //     oLiss[0].style.display = "none";
    //     oLiss[1].style.display = "block";
    // }else{
    //     oLis[0].className = "newlan-tit active";
    //     oLis[1].className = "newlan-tit";
    //     oLiss[0].style.display = "block";
    //     oLiss[1].style.display = "none";
    // }
    var url = location.search;
    console.log(url);
    if (url.indexOf("?") != -1) {    //判断是否有参数
        oLis[1].className = "newlan-tit active";
        oLiss[1].style.display = "block";
        oLis[0].className = "newlan-tit";
        oLiss[0].style.display = "none";
     }
    for (var i= 0;i<oLis.length;i++){ 
        oLis[i].index = i;
        oLis[i].onclick = function (){
            for (var j = 0;j< oLis.length;j++){
                oLis[j].className = "";
                oLiss[j].style.display ="none";
            }
            this.className = "active";
            oLiss[this.index].style.display = "block";
            var img = necontent.getElementsByClassName("show");
                console.log(img);
                for(var a=0;a < img.length;a++){
                    img[a].style.filter = 'blur(5px)';
                }
            setTimeout(() => {
                // var img = necontent.getElementsByClassName("show");
                // console.log(img);
                for(var i=0;i < img.length;i++){
                    img[i].style.filter = 'blur(0px)';
                }
            }, 1000)
        }
        
    }
    var aIem = document.getElementsByClassName("newcont-rightbox-textbox");
    var but = document.getElementsByClassName("but");
    var nowPage = 0; 
    var m = aIem.length;

    next = function (){
        aIem[nowPage].className = "newcont-rightbox-textbox";
        but[0].style.cursor = "pointer";
        but[1].style.cursor = "pointer";
        nowPage++;
        if(nowPage >= m-1){
            nowPage=m-1;
            aIem[m-1].className = "newcont-rightbox-textbox select";
            but[1].style.cursor = "not-allowed";
        }
        aIem[nowPage].className = "newcont-rightbox-textbox select";
    }

    prev = function (){
        aIem[nowPage].className = "newcont-rightbox-textbox";
        but[0].style.cursor = "pointer";
        but[1].style.cursor = "pointer";
        nowPage--;
        if(nowPage <= 0){
            nowPage = 0;
            aIem[nowPage].className = "newcont-rightbox-textbox select";
            but[0].style.cursor = "not-allowed";
        }else{
            aIem[nowPage].className = "newcont-rightbox-textbox select";
        }
    }
    setTimeout(() => {
        var img = document.getElementsByClassName("show");
        console.log(img);
        for(var i=0;i < img.length;i++){
            img[i].style.filter = 'blur(0px)';
        }
    }, 1000)
// }
