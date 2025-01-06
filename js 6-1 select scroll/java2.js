

let btn=document.getElementById("btn")

window.onscroll=function(){
    if(scrollY>500){
        btn.style.display="block"
    }else{
        btn.style.display="none"
    }
}

btn.onclick=function(){
    // scroll(0,0)

       scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}