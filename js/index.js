var img = 0
var tp = document.getElementsByClassName("tp")[0]
var tps = tp.getElementsByClassName("pic")
function pre1() {
    tps[img].style.display = "none"
    img--
    if (img <= 0) {
        // index=qhs.length-1
        tps[0].style.display = "block"
        alert("当前页面已经是第一页")
    } else {
        tps[img].style.display = "block"
    }
}
function next1() {
    tps[img].style.display = "none"
    img++
    if (img >= 5) {
        img = 0
        tps[img].style.display = "block"
        alert("当前页面已经是最后一页")
    } else {
        tps[img].style.display = "block"
    }
}
var index = 0
var qh = document.getElementsByClassName("qh")[0];
var qhs = qh.getElementsByClassName("qh1");
// console.log(qhs);
function pre() {
    qhs[index].style.display = "none"
    index--
    if (index <= 0) {
        // index=qhs.length-1
        qhs[0].style.display = "block"
        alert("当前页面已经是第一页")
    } else {
        qhs[index].style.display = "block"
    }
}
function next() {
    qhs[index].style.display = "none"
    index++
    if (index >= 5) {
        index = 0
        qhs[index].style.display = "block"
        alert("当前页面已经是最后一页")
    } else {
        qhs[index].style.display = "block"
    }
}
var ditu=document.getElementsByClassName("ditu")[0]
var ul=document.getElementsByClassName("yic")
var left=document.getElementById("btn-left")
var right=document.getElementById("btn-right")
 console.log(ul)
var n=0
function next2(){
    ul[n].style.display="none"
    n++
    if (n>=ul.length-1) {
        n = ul.length-1
        right.style.opacity="0"
        // left.style.opacity="1"
        ul[n].style.display = "block"
        // alert("当前页面已经是最后一页")
    } else {
        right.style.opacity="1"
        left.style.opacity="1"
        ul[n].style.display = "block"
    }
}
function pre2(){
    ul[n].style.display = "none"
    n--
    if (n <= 0) {
        n=0
        // index=qhs.length-1
        left.style.opacity="0"
        // right.style.opacity="1"
        ul[0].style.display = "block"
        // alert("当前页面已经是第一页")
    } else {
        ul[n].style.display = "block"
        left.style.opacity="1"
        right.style.opacity="1"
    }
}
window.onload = function () {
    var div = document.getElementsByClassName("lbt")[0]
    // console.log(div)
    var pointsParent = document.getElementsByClassName("diandian")[0]
    //  console.log(pointsParent);
    var points = pointsParent.getElementsByTagName('ul')[0]
    //  console.log(points.children);
    var divList = div.children
    var length = divList.length
    var count = 0
    var timer = null
    encapsulationanner = () => {//封装
        timer = setInterval(() => {
            if (count + 1 == length) {
                div.scrollTop = 0
                count = 0
                points.children[count].classList.add('activeClass')
                points.children[divList].classList.remove('activeClass')
            }
            else {
                points.children[count].classList.remove('activeClass')
                count++
                let top = count * 630
                // div.scrollTop=top
                var countBanner = 0
                points.children[count].classList.add('activeClass')
                for (let i = ((count - 1) * 630) + 50; i <= top; i += 50) {
                    countBanner++
                    setTimeout(() => {
                        div.scrollTop = i
                    }, countBanner * 50)
                }
            }
        }, 3000)
    }
    encapsulationanner()
    //鼠标离开事件
    bannerMouseLeave = (val) => {
        encapsulationanner()
    }
    //鼠标悬停
    bannerMouseover = () => {
        clearInterval(timer)
    }
    //鼠标点击事件
    iconMouseovar = (val) => {
        clearInterval(timer)
        points.children[val].classList.add('activeClass')
        points.children[count].classList.remove('activeClass')
        count = val
        div.scrollTop = count * 630

    }
}

