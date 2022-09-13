//tab切换
function select_menu(obj1) {
  var imgss = document.getElementsByClassName("main_content_middle");
  console.log(imgss);
  for(var n = 0;n < imgss.length;n++){
    imgss[n].style.filter = "blur(5px)";
  }
  reset_style(); //重置所有
  obj1.style.backgroundColor = "#ECF0F5"; //当前的li加背景色
  var d= document.getElementById(obj1.id + "1");
  d.style.display = "block";
  var imgs = d.getElementsByClassName("main_content_middle")[0];
  setTimeout(() => {
    console.log(imgs);
    imgs.style.filter="blur(0px)";
  },1000)
}
//重置所有的菜单和内容的颜色
function reset_style() {
  var li_nodes = document.getElementsByClassName("bbody_b_b_bgc_li");
  var div_nodes = document.getElementsByClassName("main_content");
  // console.log(li_nodes);
  for (var i = 0; i < li_nodes.length; i++) {
    li_nodes[i].style.backgroundColor = "#F7F6F7";
  }
  for (var j = 0; j < div_nodes.length; j++) {
    div_nodes[j].style.display = "none";
  } 
}

setTimeout(() => {
  var img = document.getElementsByClassName("main_content_middle");
  for(var n = 0;n < img.length;n++){
    img[n].style.filter = "blur(0px)";
  }
},1000) 