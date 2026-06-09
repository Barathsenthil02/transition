
var imgContainer = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg= document.getElementById("original-img");
var line= document.getElementById("line");

originalImg.style.width = imgContainer.offsetWidth + "px";

var leftSpace = imgContainer.offsetLeft;

imgContainer.onmousemove =function(e)
{

    
    var boxWidth = (e.pageX - leftSpace) + "px";

    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
    


}

