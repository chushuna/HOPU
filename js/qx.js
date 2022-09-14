var ii = document.getElementsByTagName("img");
for(var j = 0;j < ii.length;j++){
    ii[j].className = "show";
}
console.log(ii);
setTimeout(() => {
    var img = document.getElementsByClassName("show");
    console.log(img);
    for(var i=0;i < img.length;i++){
        img[i].style.filter = 'blur(0px)';
    }
}, 1000)