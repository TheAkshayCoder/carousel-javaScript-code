const imgs=document.getElementById("imgs")
const img=document.querySelectorAll("img")

let index=0
function run(){
    let i
    for (i=0;i<img.length;i++){
        img[i].style.display="none"
    }
    index++
    if(index>img.length-1){
        index=1
    }
    img[index-1].style.display="block"
}

setInterval(run, 2000);